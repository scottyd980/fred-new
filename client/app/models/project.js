import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	items: DS.hasMany('item'),
	createdAt: DS.attr('date'),
	updatedAt: DS.attr('date')
});
