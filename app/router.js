import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('articl', {path:'/articl/:topStory_id'});
  this.route('search');
});

export default Router;
