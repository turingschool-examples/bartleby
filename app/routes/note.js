import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.modelFor('notes').filterBy('id', parseInt(params.note_id, 10))[0];
  }
});
