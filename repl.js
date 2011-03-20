
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

		$.get(lang.example_file, asyncMap);
		$('#lang_logo').src = lang.logo;
		$LAB
			.script(lang.scripts)
			.wait(asyncMap);	
	}
		
	function eval_resultCb(output, state){
		$.tmpl('output', code_output).appendTo('#history');
	}
	
	function eval_errorCb(message){
		$.tmpl('error', message).appendTo('#history');
	}

	function eval(input){
		$.tmpl('input', input).appendTo('#history');
		lang.eval_func(input, state, eval_resultCb, eval_errorCb);
	}

	return {

		load: load,
     		eval: eval
	}	
})();

//eval_func: void(input, state, result_callback(text, state), error_callback(message))
//highlight_func: void(element)


