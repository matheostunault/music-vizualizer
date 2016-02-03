(function(ctx){

	var app = {
		// propriétés/méthodes
		config: {
			debug: true
		},		

		start: function(){
			var w = app.webgl;
			var a = app.audio;
			w.renderer.render(w.scene, w.camera)
			a.analyser.getByteFrequencyData(a.frequencyData);
			a.audio.start;
			console.log('====|> musicroad is started <|====');
		},
		
		animate: function(){
			var w = app.webgl;
			
			if(this.config.debug === true){
				w.stats.begin();
			}

			app.control.update;

			if(this.config.debug === true){
				w.stats.end();
			}
			requestAnimationFrame(app.animate);
		},
		init: function() {
			this.webgl.init_three_engine();
			this.audio.init_audio();
			if(this.config.debug === true){
				this.webgl.init_debug();
			}
			console.log('App is ready !');
		}

	}

	var self = app;
	ctx.app = app;

})(window);