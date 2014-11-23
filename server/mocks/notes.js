module.exports = function(app) {
  var express = require('express');
  var notesRouter = express.Router();

  var notes = [
    {
      id: 1,
      title: 'Shopping list',
      body: 'Gala apples, Fuji apples, red delicious apples'
    },
    {
      id: 2,
      title: 'Todo list',
      body: 'Write sample application for Ember lesson'
    },
    {
      id: 3,
      title: 'Wish list',
      body: 'A bread bowl from Panera'
    }
  ];

  notesRouter.get('/', function(req, res) {
    res.send(notes);
  });
  notesRouter.get('/:id', function(req, res) {
    res.send(notes[req.params.id - 1]);
  });
  notesRouter.post('/', function(req, res) {
    var note = req.body;
    note.id = notes.length + 1;
    notes.push(note);
    res.send(note);
  });
  app.use('/api/notes', notesRouter);
};
