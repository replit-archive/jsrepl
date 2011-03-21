//we are playing with lots of evil scripts, they may play with anything even undefined
(function ($, undefined){

//templates
$(function (){
	//todo create nested templates
	//todo merge input output and error, differentiate by class
	var optgroup = '{{each(cat, names_arr) data}} \
				<optgroup label="${cat}"> \
					{{each names_arr}} \
						<option value="${$value.value}">${$value.display}</option> \
					{{/each}} \
				</optgroup> \
			{{/each}}',
		option = '<option value="${value}">${display}</option>';
	$.template('option', option);
	$.template('optgroup', optgroup);
	$.template('error', '<div class="error">${message}</div>');
	$.template('input', '<div class="input">&gt;&gt;&gt;${input}</div>');
	$.template('output', '<div class="output">${output}</div>');
});


//load and bind dropbox
$(function(){
	var $langDb = $('#languages').empty(),
		cats = {},
		lang, opt_group;
	
	$langDb.change(function(){
		function cb(){
			//define here the laoding action
			$('body').toggleClass('loading');
		}
		cb();
		REPL.load($(this).val(), cb);
	});
	for (var prop in Languages){	
		if (!Languages.hasOwnProperty(prop)) continue;
		lang = Languages[prop];
		if (!cats[lang.category]) cats[lang.category] = [];
		cats[lang.category].push({
			display:lang.name,
			value: prop
		});
	}
	opt_group = $.tmpl('optgroup', {data:cats});
	opt_group.appendTo($langDb);
	//manually trigger change, because its not triggered on appends
	$langDb.change();	
	
});

//controls
$(function(){
	var $prompt = $('#input');
	$prompt[0].contentEditable = true;
	$prompt.keydown(function(e){
		if (e.keyCode === 13){
			e.preventDefault();
			REPL.evaluate($prompt.text());
			return false;
		}
	});
});

var REPL = (function(){
	var lang, current_state,
    		//examples object hold all the current lang examples, populate with dummy example at first.
		//todo rethink examples drop box, maybe a list is more apporpriate
    		examples;

	function reset(){
		lang = current_state = undefined;
		examples = {
			'select example' : ''
		};
	}
	//todo think about error loading scripts or example file
	function load(name, callback){
		var c = 0,
     			dir_prefix = 'langs/' + name + '/',
    			$examples = $('#examples'),
    			example;
		//reset states
		reset();
		
		function asyncMap(){
			c++;
			if (c==2) callback();
		}
		lang = Languages[name];

		//insure dependancy saftey
		var lab = $LAB;
		for (var i=0,l = lang.scripts.length; i < l; i++){
			lab = lab.script(dir_prefix + lang.scripts[i]).wait();	
		}
		lab.wait(asyncMap);
		
		//load examples, generate drop box options
		$.getJSON(dir_prefix + lang.example_file, {}, function(data) {
			var example_name;
			$examples
				.empty()
				.append($.tmpl('option', {
				value: 'select example',
			       	display: 'Select Example'
			}));
			for (var i = 0, l = data.length; i < l; i++){
				example = data[i];
				//machine name (html attr value) is same as display but lowercase
				example_name = example.name.toLowerCase();
				$.tmpl('option', {value: example_name, display: example.name}).appendTo($examples);
				examples[example_name] = example.code;
					
			}
			$examples.change(function(){
				$('#input').text(examples[$(this).val()]);
				
			});
			$examples.val('select example');
			asyncMap();		
		});
		//load pic
		$('#lang_logo').src = lang.logo;
	//	$LAB
	//		.script(lang.scripts)
	//		.wait(function(){callback()});	
	}
	
	//callbacks
	var eval_callbacks = {
		result: function(output, state){
			jQuery.tmpl('output', {output:output}).appendTo('#history');
			eval_callbacks.done();
		},
		error: function(message){
			jQuery.tmpl('error', {message:message}).appendTo('#history');
			eval_callbacks.done();		
		},
		done: function(){
			//checkout cross-browser compatibality
			document.execCommand('selectAll', false, undefined);
			$('#input').focus();		    
		}
	};

	function evaluate(input){
		$.tmpl('input', {input:input}).appendTo('#history');
		JSREPL[lang.eval_func](input, eval_callbacks.result, eval_callbacks.error);
	}

	return {

		load: load,
     		evaluate: evaluate,
		examples: examples
	}	
})();

/* Global JSREPL*/
JSREPL = {
	REPL: REPL
};
})(jQuery);
//eval_func: void(input, state, result_callback(text, state), error_callback(message))
//highlight_func: void(element)


