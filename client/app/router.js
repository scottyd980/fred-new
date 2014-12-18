import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('items');
  this.route('add');
  this.route('createDocument', {path: '/createDocument/:item_id'});
});

export default Router;
