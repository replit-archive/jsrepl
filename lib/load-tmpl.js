(function($){
	$.extend({

		loadTmpl: function(url, name, cb){
			var c;
			if (typeof name === "function"){
				cb = name;
			}else if(!cb){
				cb = $.noop;
			}

			if ($.isArray(url)){
				c = url.length;
				$.each(url, function(i, o){
					 _load(o.url, o.name);
				});
			}else{
				cb();
				return _load(url, name);
			}

			function _load(u, n){

				if (!n) n = u;
				return	$.get(u, function(d){
					$.template(n, d);
					if (c === 1){
						cb();
					}else if(c > 0){
						c--;
					}
				});
			}

		}
	});

})( jQuery );

