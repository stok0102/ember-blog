import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        username: this.get('username'),
        content: this.get('content'),
        mood: this.get('mood'),
        post: this.get('post'),
      };
      this.sendAction('save', params)
    }
  }
});
