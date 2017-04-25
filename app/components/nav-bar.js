import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    linking(){
      this.sendAction('link');
    },
  }
});
