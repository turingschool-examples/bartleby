import Ember from 'ember';
import Note from 'bartleby/models/note'

export default Ember.Route.extend({
  model: function () {
    return [
      Note.create({
        title: 'Shopping list',
        body: 'Gala apples, Fuji apples, red delicious apples'
      }),
      Note.create({
        title: 'Todo list',
        body: 'Write sample application for Ember lesson'
      }),
      Note.create({
        title: 'Wish list',
        body: 'A bread bowl from Panera'
      })
    ];
  }
});
