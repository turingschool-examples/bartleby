import Ember from 'ember';
import Note from 'bartleby/models/note';

export default Ember.Route.extend({
  model: function (params) {
    return this.modelFor('notes').filterBy('id', params.note_id)[0];
  }
});
