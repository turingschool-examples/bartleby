import Ember from 'ember';

export default Ember.ObjectController.extend({

  editing: false,

  actions: {

    startEditing: function () {
      this.set('editing', true);
    },

    stopEditing: function () {
      this.set('editing', false);
    }

  }

});
