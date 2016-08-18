import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        username: this.get('username'),
        commentContent: this.get('commentContent'),
        mood: this.get('mood'),
        post: this.get('post'),
      };
      this.sendAction('save', params);
    }
  }
});
