/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNoteHandler = (request) => {
  const { title, tags, body } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    title, tags, body, id, createdAt, updatedAt,
  };

  return notes.push(newNote);
};

const viewNote = () => (
  {
    status: 'success',
    data: { notes },
  }
);

const viewNoteById = (request) => {
  const { id } = request.params;
  const note = notes.filter((n) => n.id === id)[0];
  return {
    status: 'success',
    data: { note },
  };
};

const updateNote = (request) => {
  const { id } = request.params;
  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();
  const index = notes.findIndex((note) => note.id === id);

  // eslint-disable-next-line no-return-assign
  return notes[index] = {
    ...notes[index],
    title,
    tags,
    body,
    updatedAt,
  };
};

const deleteNote = (request) => {
  const { id } = request.params;
  const index = notes.findIndex((note) => note.id === id);

  return notes.splice(index, 1);
};

module.exports = {
  addNoteHandler, viewNote, viewNoteById, updateNote, deleteNote,
};
