(function ($){

//templates
$(function (){
	var optgroup = '{{each(cat, names_arr) data}} \
				<optgroup label="${cat}"> \
					{{each names_arr}} \
						<option>${$value}</option> \
					{{/each}} \
				</optgroup> \
			{{/each}}';
	$.template('optgroup', optgroup);
	$.template('error', '<div>${data}</div>');
	$.template('input', '<div>&gt;&gt;&gt;${data}</div>');
	$.template('output', '<div>${data}</div>');
});


//load checkbox
$(function(){
	var $langDb = $('#languages').empty(),
		cats = {},
		lang, opt_group;
	
$langDb.change(function(){
		REPL.load($(this).val(),$.noop );
	});
	for (var prop in Languages){	
		if (!Languages.hasOwnProperty(prop)) continue;
		lang = Languages[prop];
		if (!cats[lang.category]) cats[lang.category] = [];
		cats[lang.category].push(lang.name);
	}
	
	opt_group = $.tmpl('optgroup', {data:cats});
	opt_group.appendTo($langDb);
	
});

//controls
$(function(){
	var $prompt = $('#input');
	$prompt[0].contentEditable = true;
	$prompt.keyup(function(e){
		if (e.keyCode === 13){
			e.preventDefault();
			REPL.eval($prompt.text());
			return false;
		}
	});
});

/* Global REPL */
REPL = (function(){
	var lang, current_state;
	//todo think about error loading scripts or example file
	function load(name, callback){
		var c = 0;
		function asyncMap(){
			c++;
			if (c==2) callback();
		}
		lang = Languages[name];
		var lab = $LAB;
		for (var i=0,l = lang.scripts.length; i < l; i++){
			lab = lab.script('langs/' + name + '/' + lang.scripts[i]).wait();	
		}
	
		$.get(lang.example_file, asyncMap);
		$('#lang_logo').src = lang.logo;
	//	$LAB
	//		.script(lang.scripts)
	//		.wait(function(){callback()});	
	}
		
	function eval_resultCb(output, state){
		$.tmpl('output', code_output).appendTo('#history');
	}
	
	function eval_errorCb(message){
		$.tmpl('error', message).appendTo('#history');
	}

	function eval(input){
		$.tmpl('input', input).appendTo('#history');
		eval(lang.eval_func)(input, eval_resultCb, eval_errorCb);
	}

	return {

		load: load,
     		eval: eval
	}	
})();
})(jQuery);
//eval_func: void(input, state, result_callback(text, state), error_callback(message))
//highlight_func: void(element)


