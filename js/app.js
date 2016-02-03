(function(ctx){

	var app = {
		// propriétés/méthodes
		config: {
			debug: true
		},		

		start: function(){
			var w = app.webgl;
			w.renderer.render(w.scene, w.camera)
			console.log('====|> musicroad is started <|====');
		},
		
		animate: function(){
			var w = app.webgl;
			if(this.config.debug === true){
				w.stats.begin();
			}
			app.control.update;
			w.renderer.render(w.scene, w.camera);
			if(this.config.debug === true){
				w.stats.end();
			}
			requestAnimationFrame(app.animate)
		},
		init: function() {
			this.webgl.init_three_engine();
			if(this.config.debug === true){
				this.webgl.init_debug();
			}
			console.log('App is ready !');
		}

	}

	var self = app;
	ctx.app = app;

})(window);