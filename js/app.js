(function(ctx){

	var app = {
		// propriétés/méthodes
		config: {
			debug: true
		},		

		start: function(){
			var w = app.webgl;
			var a = app.audio;
			var e = app.environment;
			a.analyser.getByteFrequencyData(a.frequencyData);
			a.audio.start;
			console.log('====|> musicroad is started <|====');
		},
		
		animate: function(){
			var w = app.webgl;
			var	a = app.audio;
			if(app.config.debug === true){
				w.stats.begin();
			}
  			// console.log(a.frequencyData);

			// app.control.update;

			if(app.config.debug === true){
				w.stats.end();
			}
			requestAnimationFrame(app.animate);
			w.renderer.render(w.scene, w.camera);
		},
		init: function() {
			this.webgl.init_three_engine();
			this.environment.init_environment();
			this.audio.init_audio();
			// console.log(this.webgl.scene);

			if(this.config.debug === true){
				this.webgl.init_debug();
			}
			console.log('App is ready !');
		}

	}

	var self = app;
	ctx.app = app;

})(window);