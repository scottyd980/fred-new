import Ember from 'ember';

export default Ember.Route.extend({
	model: function(item) {
		return this.store.find('item', item.item_id);
	},
	setupController: function(controller, model) {
		controller.set('item', model);
	}
});
