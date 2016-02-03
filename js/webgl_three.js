(function(ctx){

	var webgl = {
		// propriétés/méthodes


		init_three_engine: function(){
			
			var w 	= this;
			w.scene = new THREE.Scene();

			w.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
			w.camera.position.set(25,25,150);

			document.body.style.margin = 0;
			document.body.style.overflow = 'hidden';			

			w.renderer = new THREE.WebGLRenderer({antialias: true});
			w.renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( w.renderer.domElement );

			// lights
			
			var ambient = new THREE.AmbientLight( 0x333333 )
			w.scene.add( ambient );

			var light = new THREE.PointLight( 0xFFFFFF );
			light.position.set( 0, 30, 30);
			w.scene.add( light );

			console.log('Three engine ready !');
		},

		init_debug: function(){

			var w = this;
			var trident = new THREE.AxisHelper( 15 );
			w.scene.add( trident );

			//  stats
	
			w.stats = new Stats();
			w.stats.setMode( 0 ); // 0: fps, 1: ms, 2: mb

			// align top-left
			w.stats.domElement.style.position 	= 'absolute';
			w.stats.domElement.style.left 		= '0px';
			w.stats.domElement.style.top 		= '0px';

			document.body.appendChild( w.stats.domElement );

			console.log('WebGl debug ready !');
		}
	}

	var self = webgl;
	ctx.webgl = webgl;

})(app);