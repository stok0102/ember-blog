import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(model) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        category: this.get('category'),
        content: this.get('content').split(/(\n)\W/ig),
        image: this.get('image'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', model, params);
    }
  }
});
