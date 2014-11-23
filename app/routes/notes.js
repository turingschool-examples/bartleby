import Ember from 'ember';
import Note from 'bartleby/models/note'

export default Ember.Route.extend({
  model: function () {
    return [
      Note.create({
        id: 1,
        title: 'Shopping list',
        body: 'Gala apples, Fuji apples, red delicious apples'
      }),
      Note.create({
        id: 2,
        title: 'Todo list',
        body: 'Write sample application for Ember lesson'
      }),
      Note.create({
        id: 3,
        title: 'Wish list',
        body: 'A bread bowl from Panera'
      })
    ];
  }
});
