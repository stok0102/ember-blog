import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        category: this.get('category'),
        content: this.get('content').split(/(\n)\W/ig),
        image: this.get('image'),
      };
      this.sendAction('save', params);
    }
  }
});
