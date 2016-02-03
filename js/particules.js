(function(ctx){

	var visual_elements = {
		// propriétés/méthodes
		config: {
			debug: true
		},
		init: function() {
			console.log('visual_elements is ready !');
		}
	}

	var self = visual_elements;
	ctx.visual_elements = visual_elements;

})(app);