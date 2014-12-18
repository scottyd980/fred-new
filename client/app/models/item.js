import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	user: DS.attr('string'),
	project: DS.belongsTo('project'),
	documents: DS.hasMany('document'),
	message: DS.attr('string'),
	status: DS.attr('string'),
	createdAt: DS.attr('date'),
	updatedAt: DS.attr('date')
});
