const Router = require('koa-router');

const note = new Router();
const authController = require('../controller/auth_controller');
const noteController = require('../controller/note_controller');

note.get('/', noteController.readNotes);
note.post('/', authController.certify, noteController.createNote);
note.get('/:id', authController.certify, noteController.readNote);
note.patch('/:id', authController.certify, noteController.updateNote);
note.delete('/:id', authController.certify, noteController.deleteNote);

module.exports = note;
