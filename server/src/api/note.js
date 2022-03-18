const Router = require('koa-router');

const note = new Router();
const authController = require('../controller/auth_controller');
const noteController = require('../controller/note_controller');

note.get('/', noteController.readAllNote);
note.post('/', authController.certify, noteController.createNote);
note.patch('/:id', authController.certify, noteController.updateNote);

module.exports = note;
