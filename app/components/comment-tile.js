import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment) {
      if (confirm("Delete Comment?")) {
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
