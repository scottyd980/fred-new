import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addItem: function() {
			var itemName = this.get('itemName'),
				userName = this.get('userName'),
				message = this.get('message'),
				projectID = this.get('projectName');

			var item = this.store.createRecord('item', {
				name: itemName,
				user: userName,
				project: projectID,
				message: message,
				status: "new"
			});

			var that = this;

			item.save().then(function() {
				that.reset();
			});
		}
	},
	reset: function() {
		this.setProperties({
			itemName: "",
			userName: "",
			message: ""
		});
	}
});
