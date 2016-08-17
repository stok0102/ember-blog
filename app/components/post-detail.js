import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(model, params) {
      this.sendAction('update', model, params);
    },
    delete(model) {
      if (confirm('Has this source been compromised?')) {
        this.sendAction('destroyPost', model);
      }
    }
  }
});
