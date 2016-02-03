(function(ctx){

	var particules = {
		// propriétés/méthodes
		config: {
			debug: true
		},
		init: function() {
			this.webgl.init_three_engine();
			if(this.config.debug === true){
				this.webgl.init_debug();
			}
			console.log('particules is ready !');
		}
	}

	var self = particules;
	ctx.particules = particules;

})(app);