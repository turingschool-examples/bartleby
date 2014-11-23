import Ember from 'ember';
import Note from 'bartleby/models/note';

export default Ember.ArrayController.extend({

  numberOfNotes: function () {
    return this.get('content').length;
  }.property('content.[]'),

  actions: {

    addNote: function () {
      var note = { title: 'New Note', body: 'Lorem ipsum…' };

      $.post('/api/notes', note).done(function (data) {
        var note = Note.create(data);
        this.get('content').pushObject(note);
      }.bind(this)).fail(function (data) {
        alert('Something went wrong with saving the note. Check the console.');
        console.log('POST request failed!', data);
      });
    }

  }

});
