(function() {
  var $, DEFAULT_INDENT_WIDTH, DEFAULT_PROMPT_CONINUE_LABEL, DEFAULT_PROMPT_LABEL, JQConsole, KEY_BACKSPACE, KEY_DELETE, KEY_DOWN, KEY_END, KEY_ENTER, KEY_HOME, KEY_LEFT, KEY_RIGHT, KEY_TAB, KEY_UP, STATE_INPUT, STATE_OUTPUT, STATE_PROMPT;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  $ = jQuery;
  STATE_INPUT = 0;
  STATE_OUTPUT = 1;
  STATE_PROMPT = 2;
  KEY_ENTER = 13;
  KEY_TAB = 9;
  KEY_DELETE = 46;
  KEY_BACKSPACE = 8;
  KEY_LEFT = 37;
  KEY_RIGHT = 39;
  KEY_UP = 38;
  KEY_DOWN = 40;
  KEY_HOME = 36;
  KEY_END = 35;
  DEFAULT_PROMPT_LABEL = '>>> ';
  DEFAULT_PROMPT_CONINUE_LABEL = '... ';
  DEFAULT_INDENT_WIDTH = 2;
  JQConsole = (function() {
    function JQConsole(container, header, prompt_label, prompt_continue_label) {
      this.header = header || '';
      this.prompt_label_main = prompt_label || DEFAULT_PROMPT_LABEL;
      this.prompt_label_continue = '\n' + (prompt_continue_label || DEFAULT_PROMPT_CONINUE_LABEL);
      this.indent_width = DEFAULT_INDENT_WIDTH;
      this.state = STATE_OUTPUT;
      this.input_queue = [];
      this.input_callback = null;
      this.multiline_callback = null;
      this.history = [];
      this.history_index = 0;
      this.history_new = '';
      this.history_active = false;
      this.shortcuts = {};
      this.$console = $('<pre class="jqconsole"/>').appendTo(container);
      this.$input_source = $('<textarea/>');
      this.$input_source.css({
        position: 'absolute',
        left: '-9999px'
      });
      this.$input_source.appendTo(container);
      this._InitPrompt();
      this._SetupEvents();
      this.Write(this.header, 'jqconsole-header');
      $(container).data('jqconsole', this);
    }
    JQConsole.prototype.Reset = function() {
      if (this.state !== STATE_OUTPUT) {
        this.ClearPromptText(true);
      }
      this.state = STATE_OUTPUT;
      this.input_queue = [];
      this.input_callback = null;
      this.multiline_callback = null;
      this.history = [];
      this.history_index = 0;
      this.history_current = '';
      this.shortcuts = {};
      this.$prompt.detach();
      this.$console.html('');
      this.$prompt.appendTo(this.$console);
      this.Write(this.header, 'jqconsole-header');
    };
    JQConsole.prototype.RegisterShortcut = function(key_code, callback) {
      var addShortcut;
      if (isNaN(key_code)) {
        key_code = key_code.charCodeAt(0);
      } else {
        key_code = parseInt(key_code, 10);
      }
      if (!((0 < key_code && key_code < 256)) || isNaN(key_code)) {
        throw new Error('Key code must be a number between 0 and 256 exclusive.');
      }
      if (!callback instanceof Function) {
        throw new Error('Callback must be a function, not ' + callback + '.');
      }
      addShortcut = __bind(function(key) {
        if (!(key in this.shortcuts)) {
          this.shortcuts[key] = [];
        }
        return this.shortcuts[key].push(callback);
      }, this);
      addShortcut(key_code);
      if ((65 <= key_code && key_code <= 90)) {
        addShortcut(key_code + 32);
      }
      if ((97 <= key_code && key_code <= 122)) {
        addShortcut(key_code - 32);
      }
    };
    JQConsole.prototype.GetColumn = function() {
      var lines;
      this.$prompt_cursor.text('');
      lines = this.$console.text().split('\n');
      this.$prompt_cursor.text(' ');
      return lines[lines.length - 1].length;
    };
    JQConsole.prototype.GetLine = function() {
      return this.$console.text().split('\n').length - 1;
    };
    JQConsole.prototype.ClearPromptText = function(clear_label) {
      if (this.state === STATE_OUTPUT) {
        throw new Error('ClearPromptText() is not allowed in output state.');
      }
      this.$prompt_before.html('');
      this.$prompt_after.html('');
      this.$prompt_label.text(clear_label ? '' : this._SelectPromptLabel(false));
      this.$prompt_left.text('');
      this.$prompt_right.text('');
    };
    JQConsole.prototype.GetPromptText = function(full) {
      var after, before, current, getPromptLines, text;
      if (this.state === STATE_OUTPUT) {
        throw new Error('GetPromptText() is not allowed in output state.');
      }
      if (full) {
        this.$prompt_cursor.text('');
        text = this.$prompt.text();
        this.$prompt_cursor.text(' ');
        return text;
      } else {
        getPromptLines = function(node) {
          var buffer;
          buffer = [];
          node.children().each(function() {
            return buffer.push($(':last-child', this).text());
          });
          return buffer.join('\n');
        };
        before = getPromptLines(this.$prompt_before);
        if (before) {
          before += '\n';
        }
        current = this.$prompt_left.text() + this.$prompt_right.text();
        after = getPromptLines(this.$prompt_after);
        if (after) {
          after = '\n' + after;
        }
        return before + current + after;
      }
    };
    JQConsole.prototype.SetPromptText = function(text) {
      if (this.state === STATE_OUTPUT) {
        throw new Error('SetPromptText() is not allowed in output state.');
      }
      this.ClearPromptText(false);
      this._AppendPromptText(text);
      this._ScrollToEnd();
    };
    JQConsole.prototype.Write = function(text, cls) {
      var span;
      span = $('<span>').text(text);
      if (cls != null) {
        span.addClass(cls);
      }
      span.insertBefore(this.$prompt);
      this._ScrollToEnd();
      this.$prompt_cursor.detach().insertAfter(this.$prompt_left);
    };
    JQConsole.prototype.Input = function(input_callback) {
      if (this.state !== STATE_OUTPUT) {
        this.input_queue.push(__bind(function() {
          return this.Input(input_callback);
        }, this));
        return;
      }
      this.history_active = false;
      this.input_callback = input_callback;
      this.multiline_callback = null;
      this.state = STATE_INPUT;
      this.$prompt.attr('class', 'jqconsole-input');
      this.$prompt_label.text(this._SelectPromptLabel(false));
      this.Focus();
      this._ScrollToEnd();
    };
    JQConsole.prototype.Prompt = function(history_enabled, result_callback, multiline_callback) {
      if (this.state !== STATE_OUTPUT) {
        this.input_queue.push(__bind(function() {
          return this.Prompt(history_enabled, result_callback, multiline_callback);
        }, this));
        return;
      }
      this.history_active = history_enabled;
      this.input_callback = result_callback;
      this.multiline_callback = multiline_callback;
      this.state = STATE_PROMPT;
      this.$prompt.attr('class', 'jqconsole-prompt');
      this.$prompt_label.text(this._SelectPromptLabel(false));
      this.Focus();
      this._ScrollToEnd();
    };
    JQConsole.prototype.AbortPrompt = function() {
      if (this.state !== STATE_PROMPT) {
        throw new Error('Cannot abort prompt when not in prompt state.');
      }
      this.Write(this.GetPromptText(true) + '\n', 'jqconsole-old-prompt');
      this.ClearPromptText(true);
      this.state = STATE_OUTPUT;
      this.input_callback = this.multiline_callback = null;
      this._CheckInputQueue();
    };
    JQConsole.prototype.Focus = function() {
      this.$input_source.focus();
    };
    JQConsole.prototype.SetIndentWidth = function(width) {
      return this.indent_width = width;
    };
    JQConsole.prototype.GetIndentWidth = function() {
      return this.indent_width;
    };
    /*------------------------ Private Methods -------------------------------*/
    JQConsole.prototype._CheckInputQueue = function() {
      if (this.input_queue.length) {
        return this.input_queue.shift()();
      }
    };
    JQConsole.prototype._InitPrompt = function() {
      this.$prompt = $('<span class="jqconsole-input"/>').appendTo(this.$console);
      this.$prompt_before = $('<span/>').appendTo(this.$prompt);
      this.$prompt_current = $('<span/>').appendTo(this.$prompt);
      this.$prompt_after = $('<span/>').appendTo(this.$prompt);
      this.$prompt_label = $('<span/>').appendTo(this.$prompt_current);
      this.$prompt_left = $('<span/>').appendTo(this.$prompt_current);
      this.$prompt_right = $('<span/>').appendTo(this.$prompt_current);
      this.$prompt_right.css({
        position: 'relative'
      });
      this.$prompt_cursor = $('<span class="jqconsole-cursor"> </span>');
      this.$prompt_cursor.insertBefore(this.$prompt_right);
      return this.$prompt_cursor.css({
        color: 'transparent',
        display: 'inline',
        position: 'absolute',
        zIndex: 0
      });
    };
    JQConsole.prototype._SetupEvents = function() {
      var key_event, paste_event;
      this.$console.click(__bind(function() {
        var checkFocus;
        checkFocus = __bind(function() {
          var getSelection;
          getSelection = function() {
            var _ref;
            if (window.getSelection) {
              return window.getSelection().toString();
            } else if (((_ref = document.selection) != null ? _ref.type : void 0) === "Text") {
              return document.selection.createRange().text;
            }
          };
          if (getSelection() === '') {
            return this.Focus();
          }
        }, this);
        return setTimeout(checkFocus, 0);
      }, this));
      this.$input_source.focus(__bind(function() {
        return this.$console.removeClass('jqconsole-blurred');
      }, this));
      this.$input_source.blur(__bind(function() {
        return this.$console.addClass('jqconsole-blurred');
      }, this));
      paste_event = $.browser.opera ? 'input' : 'paste';
      this.$input_source.bind(paste_event, __bind(function() {
        var handlePaste;
        handlePaste = __bind(function() {
          this._AppendPromptText(this.$input_source.val());
          this.$input_source.val('');
          return this.Focus();
        }, this);
        return setTimeout(handlePaste, 0);
      }, this));
      this.$input_source.keypress(__bind(function(e) {
        return this._HandleChar(e);
      }, this));
      key_event = $.browser.mozilla ? 'keypress' : 'keydown';
      return this.$input_source[key_event](__bind(function(e) {
        return this._HandleKey(e);
      }, this));
    };
    JQConsole.prototype._HandleChar = function(event) {
      var char_code;
      if (this.state === STATE_OUTPUT) {
        return true;
      }
      char_code = event.which;
      if (char_code === 13 || char_code === 9) {
        return false;
      }
      if ($.browser.mozilla) {
        if (event.keyCode || event.metaKey || event.ctrlKey || event.altKey) {
          return true;
        }
      }
      if ($.browser.opera) {
        if (event.keyCode || event.which || event.metaKey || event.ctrlKey || event.altKey) {
          return true;
        }
      }
      if (event.metaKey || event.ctrlKey || event.altKey) {
        return false;
      }
      this.$prompt_left.text(this.$prompt_left.text() + String.fromCharCode(char_code));
      this._ScrollToEnd();
      return false;
    };
    JQConsole.prototype._HandleKey = function(event) {
      var key;
      if (this.state === STATE_OUTPUT) {
        return true;
      }
      key = event.keyCode || event.which;
      if (event.altKey || event.metaKey && !event.ctrlKey) {
        return true;
      } else if (event.ctrlKey) {
        return this._HandleCtrlShortcut(key);
      } else if (event.shiftKey) {
        switch (key) {
          case KEY_ENTER:
            this._HandleEnter(true);
            break;
          case KEY_TAB:
            this._Unindent();
            break;
          case KEY_UP:
            this._MoveUp();
            break;
          case KEY_DOWN:
            this._MoveDown();
            break;
          default:
            return true;
        }
        return false;
      } else {
        switch (key) {
          case KEY_ENTER:
            this._HandleEnter(false);
            break;
          case KEY_TAB:
            this._Indent();
            break;
          case KEY_DELETE:
            this._Delete(false);
            break;
          case KEY_BACKSPACE:
            this._Backspace(false);
            break;
          case KEY_LEFT:
            this._MoveLeft(false);
            break;
          case KEY_RIGHT:
            this._MoveRight(false);
            break;
          case KEY_UP:
            this._HistoryPrevious();
            break;
          case KEY_DOWN:
            this._HistoryNext();
            break;
          case KEY_HOME:
            this._MoveToStart(false);
            break;
          case KEY_END:
            this._MoveToEnd(false);
            break;
          default:
            return true;
        }
        return false;
      }
    };
    JQConsole.prototype._HandleCtrlShortcut = function(key) {
      var handler, _i, _len, _ref;
      switch (key) {
        case KEY_DELETE:
          this._Delete(true);
          break;
        case KEY_BACKSPACE:
          this._Backspace(true);
          break;
        case KEY_LEFT:
          this._MoveLeft(true);
          break;
        case KEY_RIGHT:
          this._MoveRight(true);
          break;
        case KEY_UP:
          this._MoveUp();
          break;
        case KEY_DOWN:
          this._MoveDown();
          break;
        case KEY_END:
          this._MoveToEnd(true);
          break;
        case KEY_HOME:
          this._MoveToStart(true);
          break;
        default:
          if (key in this.shortcuts) {
            _ref = this.shortcuts[key];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              handler = _ref[_i];
              handler.call(this);
            }
            return false;
          } else {
            return true;
          }
      }
      return false;
    };
    JQConsole.prototype._HandleEnter = function(shift) {
      var callback, cls_suffix, indent, text, _, _ref, _results;
      if (shift) {
        return this._InsertNewLine(true);
      } else {
        text = this.GetPromptText();
        indent = this.multiline_callback ? this.multiline_callback(text) : false;
        if (indent !== false) {
          this._MoveToEnd(true);
          this._InsertNewLine(true);
          _results = [];
          for (_ = 0, _ref = Math.abs(indent); 0 <= _ref ? _ < _ref : _ > _ref; 0 <= _ref ? _++ : _--) {
            _results.push(indent > 0 ? this._Indent() : this._Unindent());
          }
          return _results;
        } else {
          cls_suffix = this.state === STATE_INPUT ? 'input' : 'prompt';
          this.Write(this.GetPromptText(true) + '\n', 'jqconsole-old-' + cls_suffix);
          this.ClearPromptText(true);
          if (this.history_active) {
            if (!this.history.length || this.history[this.history.length - 1] !== text) {
              this.history.push(text);
              this.history_index = this.history.length;
            }
          }
          this.state = STATE_OUTPUT;
          callback = this.input_callback;
          this.input_callback = null;
          if (callback) {
            callback(text);
          }
          return this._CheckInputQueue();
        }
      }
    };
    JQConsole.prototype._MoveUp = function() {
      var pos;
      if (this.$prompt_before.is(':empty')) {
        return;
      }
      pos = this.$prompt_left.text().length;
      this._MoveToStart();
      this._MoveLeft();
      this.$prompt_right.text(this.$prompt_left.text().slice(pos));
      return this.$prompt_left.text(this.$prompt_left.text().slice(0, pos));
    };
    JQConsole.prototype._MoveDown = function() {
      var pos;
      if (this.$prompt_after.is(':empty')) {
        return;
      }
      pos = this.$prompt_left.text().length;
      this._MoveToEnd();
      this._MoveRight();
      this.$prompt_left.text(this.$prompt_right.text().slice(0, pos));
      return this.$prompt_right.text(this.$prompt_right.text().slice(pos));
    };
    JQConsole.prototype._MoveLeft = function(whole_word) {
      var $lower_line, $upper_line, text, word;
      text = this.$prompt_left.text();
      if (text) {
        if (whole_word) {
          word = text.match(/\w*\W*$/);
          if (!word) {
            return;
          }
          word = word[0];
          this.$prompt_right.text(word + this.$prompt_right.text());
          return this.$prompt_left.text(text.slice(0, -word.length));
        } else {
          this.$prompt_right.text(text.slice(-1) + this.$prompt_right.text());
          return this.$prompt_left.text(text.slice(0, -1));
        }
      } else if (!this.$prompt_before.is(':empty')) {
        $lower_line = $('<span/>').prependTo(this.$prompt_after);
        $lower_line.append($('<span/>').text(this.$prompt_label.text()));
        $lower_line.append($('<span/>').text(this.$prompt_right.text()));
        $upper_line = this.$prompt_before.children().last().detach();
        this.$prompt_label.text($upper_line.children().first().text());
        this.$prompt_left.text($upper_line.children().last().text());
        return this.$prompt_right.text('');
      }
    };
    JQConsole.prototype._MoveRight = function(whole_word) {
      var $lower_line, $upper_line, text, word;
      text = this.$prompt_right.text();
      if (text) {
        if (whole_word) {
          word = text.match(/^\w*\W*/);
          if (!word) {
            return;
          }
          word = word[0];
          this.$prompt_left.text(this.$prompt_left.text() + word);
          return this.$prompt_right.text(text.slice(word.length));
        } else {
          this.$prompt_left.text(this.$prompt_left.text() + text[0]);
          return this.$prompt_right.text(text.slice(1));
        }
      } else if (!this.$prompt_after.is(':empty')) {
        $upper_line = $('<span/>').appendTo(this.$prompt_before);
        $upper_line.append($('<span/>').text(this.$prompt_label.text()));
        $upper_line.append($('<span/>').text(this.$prompt_left.text()));
        $lower_line = this.$prompt_after.children().first().detach();
        this.$prompt_label.text($lower_line.children().first().text());
        this.$prompt_left.text('');
        return this.$prompt_right.text($lower_line.children().last().text());
      }
    };
    JQConsole.prototype._MoveToStart = function(all_lines) {
      var _results;
      if (all_lines) {
        _results = [];
        while (!(this.$prompt_before.is(':empty') && this.$prompt_left.text() === '')) {
          this._MoveToStart(false);
          _results.push(this._MoveLeft(false));
        }
        return _results;
      } else {
        this.$prompt_right.text(this.$prompt_left.text() + this.$prompt_right.text());
        return this.$prompt_left.text('');
      }
    };
    JQConsole.prototype._MoveToEnd = function(all_lines) {
      var _results;
      if (all_lines) {
        _results = [];
        while (!(this.$prompt_after.is(':empty') && this.$prompt_right.text() === '')) {
          this._MoveToEnd(false);
          _results.push(this._MoveRight(false));
        }
        return _results;
      } else {
        this.$prompt_left.text(this.$prompt_left.text() + this.$prompt_right.text());
        return this.$prompt_right.text('');
      }
    };
    JQConsole.prototype._Delete = function(whole_word) {
      var $lower_line, text, word;
      text = this.$prompt_right.text();
      if (text) {
        if (whole_word) {
          word = text.match(/^\w*\W*/);
          if (!word) {
            return;
          }
          word = word[0];
          return this.$prompt_right.text(text.slice(word.length));
        } else {
          return this.$prompt_right.text(text.slice(1));
        }
      } else if (!this.$prompt_after.is(':empty')) {
        $lower_line = this.$prompt_after.children().first().detach();
        return this.$prompt_right.text($lower_line.children().last().text());
      }
    };
    JQConsole.prototype._Backspace = function(whole_word) {
      var $upper_line, text, word;
      text = this.$prompt_left.text();
      if (text) {
        if (whole_word) {
          word = text.match(/\w*\W*$/);
          if (!word) {
            return;
          }
          word = word[0];
          return this.$prompt_left.text(text.slice(0, -word.length));
        } else {
          return this.$prompt_left.text(text.slice(0, -1));
        }
      } else if (!this.$prompt_before.is(':empty')) {
        $upper_line = this.$prompt_before.children().last().detach();
        this.$prompt_label.text($upper_line.children().first().text());
        return this.$prompt_left.text($upper_line.children().last().text());
      }
    };
    JQConsole.prototype._Indent = function() {
      var _;
      return this.$prompt_left.prepend(((function() {
        var _ref, _results;
        _results = [];
        for (_ = 1, _ref = this.indent_width; 1 <= _ref ? _ <= _ref : _ >= _ref; 1 <= _ref ? _++ : _--) {
          _results.push(' ');
        }
        return _results;
      }).call(this)).join(''));
    };
    JQConsole.prototype._Unindent = function() {
      var line_text, _, _ref, _results;
      line_text = this.$prompt_left.text() + this.$prompt_right.text();
      _results = [];
      for (_ = 1, _ref = this.indent_width; 1 <= _ref ? _ <= _ref : _ >= _ref; 1 <= _ref ? _++ : _--) {
        if (!/^ /.test(line_text)) {
          break;
        }
        if (this.$prompt_left.text()) {
          this.$prompt_left.text(this.$prompt_left.text().slice(1));
        } else {
          this.$prompt_right.text(this.$prompt_right.text().slice(1));
        }
        _results.push(line_text = line_text.slice(1));
      }
      return _results;
    };
    JQConsole.prototype._InsertNewLine = function(indent) {
      var $old_line, match, old_prompt;
      if (indent == null) {
        indent = false;
      }
      old_prompt = this._SelectPromptLabel(!this.$prompt_before.is(':empty'));
      $old_line = $('<span/>').appendTo(this.$prompt_before);
      $old_line.append($('<span/>').text(old_prompt));
      $old_line.append($('<span/>').text(this.$prompt_left.text()));
      this.$prompt_label.text(this._SelectPromptLabel(true));
      if (indent && (match = this.$prompt_left.text().match(/^\s+/))) {
        this.$prompt_left.text(match[0]);
      } else {
        this.$prompt_left.text('');
      }
      return this._ScrollToEnd();
    };
    JQConsole.prototype._AppendPromptText = function(text) {
      var line, lines, _i, _len, _ref, _results;
      lines = text.split('\n');
      this.$prompt_left.text(this.$prompt_left.text() + lines[0]);
      _ref = lines.slice(1);
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        line = _ref[_i];
        this._InsertNewLine();
        _results.push(this.$prompt_left.text(line));
      }
      return _results;
    };
    JQConsole.prototype._ScrollToEnd = function() {
      return this.$console.scrollTop(this.$console[0].scrollHeight);
    };
    JQConsole.prototype._SelectPromptLabel = function(continuation) {
      if (this.state === STATE_PROMPT) {
        if (continuation) {
          return this.prompt_label_continue;
        } else {
          return this.prompt_label_main;
        }
      } else {
        if (continuation) {
          return '\n ';
        } else {
          return ' ';
        }
      }
    };
    JQConsole.prototype._HistoryPrevious = function() {
      if (!this.history_active) {
        return;
      }
      if (this.history_index <= 0) {
        return;
      }
      if (this.history_index === this.history.length) {
        this.history_new = this.GetPromptText();
      }
      return this.SetPromptText(this.history[--this.history_index]);
    };
    JQConsole.prototype._HistoryNext = function() {
      if (!this.history_active) {
        return;
      }
      if (this.history_index >= this.history.length) {
        return;
      }
      if (this.history_index === this.history.length - 1) {
        this.history_index++;
        return this.SetPromptText(this.history_new);
      } else {
        return this.SetPromptText(this.history[++this.history_index]);
      }
    };
    return JQConsole;
  })();
  $.fn.jqconsole = function(header, prompt_main, prompt_continue) {
    return new JQConsole(this, header, prompt_main, prompt_continue);
  };
}).call(this);
