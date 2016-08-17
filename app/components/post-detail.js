import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(model) {
      if (confirm('Has this source been compromised?')) {
        this.sendAction('destroyPost', model);
      }
    }
  }
});
