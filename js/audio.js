(function(ctx){

	var audio = {
		// propriétés/méthodes
		config: {
			debug: true
		},
		audio : document.getElementById('audio'),
		init_audio: function() {
			var a = this;
			a.audio_ctx 	= new AudioContext();
			a.audio 		= document.getElementById('audio');
			a.audio_src 	= a.audio_ctx.createMediaElementSource(a.audio);
  			a.analyser 		= a.audio_ctx.createAnalyser();

  			a.audio_src.connect(a.analyser);
  			a.audio_src.connect(a.audio_ctx.destination);

  			a.audio_analyzer();

			console.log('Audio is ready !');
		},
		audio_analyzer: function(){
			var a = this ;
  			a.frequencyData = new Uint8Array(a.analyser.frequencyBinCount);
		}
	}

	var self = audio;
	ctx.audio = audio;

})(app); 