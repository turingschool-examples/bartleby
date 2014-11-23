import Ember from 'ember';

export default Ember.ObjectController.extend({

  editing: false,
  message: null,

  actions: {

    startEditing: function () {
      this.set('editing', true);
    },

    stopEditing: function () {
      $.post('/api/notes/' + this.get('id'), this.get('content')).done(function () {
        this.set('message', 'Your note has been saved to the server.');
      }.bind(this));
      this.set('editing', false);
    },

    dismissMessage: function () {
      this.set('message', null);
    }

  }

});
