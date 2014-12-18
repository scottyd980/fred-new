import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	item: DS.belongsTo('item'),
	type: DS.attr('string'),
	content: DS.attr('string'),
	createdAt: DS.attr('date'),
	updatedAt: DS.attr('date')
});
