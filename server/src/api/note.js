const Router = require('koa-router');

const note = new Router();
const authController = require('../controller/auth_controller');
const noteController = require('../controller/note_controller');
const commentController = require('../controller/comment_controller');

note.get('/', noteController.readNotes);
note.post('/', authController.certify, noteController.createNote);
note.get('/:noteId', authController.certify, noteController.readNote);
note.patch('/:noteId', authController.certify, noteController.updateNote);
note.delete('/:noteId', authController.certify, noteController.deleteNote);
note.post('/:noteId/comment', authController.certify, commentController.createComment);
note.patch('/:noteId/comment/:commentId', authController.certify, commentController.updateComment);
note.delete('/:noteId/comment/:commentId', authController.certify, commentController.updateComment);

module.exports = note;
