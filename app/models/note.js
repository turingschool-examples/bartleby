import Ember from 'ember';

export default Ember.Object.extend({
  title: null,
  body: null,

  setDateCreated: function () {
    var date = new Date();
    var formattedDate = moment(date).format("MMMM Do, YYYY");
    this.set('dateCreated', formattedDate);
    this.set('dateLastModified', formattedDate);
  }.on('init'),

  updateDateLastModified: function () {
    var date = new Date();
    var formattedDate = moment(date).format("MMMM Do, YYYY");
    this.set('dateLastModified', formattedDate);
  }.observes('title', 'body')
});