import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['notes'],

  title: null,
  body: null,

  actions: {

    saveNote: function () {
      var title = this.get('title');
      var body = this.get('body');

      this.store.createRecord('note', {
        title: title,
        body: body
      }).save().then(function (note) {
        this.transitionToRoute('note', note);
      }.bind(this));
    }

  }

});
