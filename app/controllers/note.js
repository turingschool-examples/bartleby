import Ember from 'ember';

export default Ember.ObjectController.extend({

  editing: false,
  message: null,

  actions: {

    startEditing: function () {
      this.set('editing', true);
    },

    stopEditing: function () {
      var note = this.get('model');
      note.save().then(function () {
        this.set('editing', false);
      }.bind(this));
    },

    dismissMessage: function () {
      this.set('message', null);
    }

  }

});
