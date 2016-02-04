(function(ctx){

	var environment = {
		// propriétés/méthodes
		init_environment : function(){
			this.skybox.init_skybox();
			this.elmts.init_elmts();
		},
		skybox : {
			init_skybox : function(){
				
				var urlPrefix = "../assets/skybox/";
				var urls = [ 	urlPrefix + "skybox.jpg", urlPrefix + "skybox.jpg",
								urlPrefix + "skybox.jpg", urlPrefix + "skybox.jpg",
								urlPrefix + "skybox.jpg", urlPrefix + "skybox.jpg" 
							];
				app.webgl.texture_skybox = new THREE.CubeTextureLoader();

    			app.webgl.texture_skybox.load(urls, function(textures){
					var shader = THREE.ShaderLib["cube"];
					shader.uniforms['tCube'].value = textures;

					var skybox_material = new THREE.ShaderMaterial( {
					  fragmentShader: shader.fragmentShader,
					  vertexShader: shader.vertexShader,
					  uniforms: shader.uniforms,
					  depthWrite: false,
					  side: THREE.BackSide
					});

					var skybox = new THREE.Mesh(
					  new THREE.CubeGeometry(500, 500, 500),
					  skybox_material
					);
					console.log(skybox);
					app.webgl.scene.add(skybox);
					
				});
 			}
		},
		elmts : {
			init_elmts : function(){
				var cube_geometry = new THREE.CubeGeometry(50,50,50);
				var cube_material = new THREE.MeshLambertMaterial({
					color : 0xffffff
				})
				var cube = new THREE.Mesh(cube_geometry, cube_material);
				app.webgl.scene.add(cube);
			}
		}

	}

	var self = environment;
	ctx.environment = environment;

})(app);