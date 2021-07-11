/* eslint-disable linebreak-style */
const {
  addNoteHandler, viewNote, viewNoteById, updateNote, deleteNote,
} = require('./handler');

/* eslint-disable linebreak-style */
const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },

  {
    method: 'GET',
    path: '/notes',
    handler: viewNote,
  },

  {
    method: 'GET',
    path: '/notes/{id}',
    handler: viewNoteById,
  },

  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: updateNote,
  },

  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNote,
  },
];

module.exports = routes;
