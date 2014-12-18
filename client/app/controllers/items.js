import Ember from 'ember';

export default Ember.ArrayController.extend({
	actions: {
		deleteItem: function(item) {
			item.set('status', 'delete');
			item.save();
		}
	}
});
