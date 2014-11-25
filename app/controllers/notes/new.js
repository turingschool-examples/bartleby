import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['notes'],

  title: null,
  body: null,

  actions: {

    saveNote: function () {
      var title = this.get('title');
      var body = this.get('body');
      var note = { title: title, body: body };
      Ember.$.post('/api/notes', note).done(function (data) {
        this.get('controllers.notes').get('content').pushObject(data);
        this.transitionToRoute('note', data);
      }.bind(this));
    }

  }

});
