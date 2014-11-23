import Ember from 'ember';
import Note from 'bartleby/models/note';

export default Ember.Route.extend({
  model: function (params) {
    return $.getJSON('/api/notes/' + params.note_id).done(function (note) {
      return Note.create(note);
    });
  }
});
