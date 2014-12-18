import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('project');
	}

	// model: function(params) {
	// 	var store = this.store;

	// 	return new Em.RSVP.Promise(function(resolve){
	// 		//find products
	// 		store.find('project').then(function(projects) {
	// 			// get all the tag promises
	// 			var promiseArr = projects.getEach('items');
	// 			//wait on them
	// 			Em.RSVP.all(promiseArr).then(function() {

	// 				var filter = store.filter('project', function(project, index, enumerable)   {
	// 					var match = false;

	// 					project.get('items').forEach(function(item) {
	// 						if(item.get('status') === 'new') {
	// 							console.log(project.get('name') + ' true');
	// 							match = true;
	// 						} else {
	// 							console.log(project.get('name') + ' false', item.get('name'));
	// 						}
	// 					});

	// 					return match;
	// 				});  //filter

	// 				resolve(filter);
	// 			});  // RSVP All  
	// 		});   //find
	// 	});   // promise

	// }
});
