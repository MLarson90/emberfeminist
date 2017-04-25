import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
    book: this.store.findAll('book'),
    ad: this.store.findAll('ad'),
    mostWanted: this.store.findAll('mostWanted'),
    topStory: this.store.findAll('topStory')
    });
  },
  actions: {
    link(){
      this.transitionTo('search');
    },
    homie(){
      this.transitionTo('index');
    },
  }
});
