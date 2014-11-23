import Ember from 'ember';
import Note from 'bartleby/models/note';

export default Ember.Route.extend({
  model: function () {
    return $.getJSON('/api/notes').done(function (notes) {
      return notes.map(function (note) {
        return Note.create(note);
      });
    });
  }
});
