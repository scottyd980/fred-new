import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createDocument: function() {

			var docName = this.get('docName'),
				documentation = this.get('documentation'),
				itemID = this.get('item');

			var doc = this.store.createRecord('document', {
				name: docName,
				item: itemID,
				type: "text",
				content: documentation
			});

			var that = this;

			doc.save().then(function() {
				that.reset();
			});
		}
	},
	reset: function() {
		this.setProperties({
			docName: "",
			documentation: ""
		});
	}
});
