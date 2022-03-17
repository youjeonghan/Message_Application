const Router = require('koa-router');

const note = new Router();
const noteController = require('../controller/note_controller');

note.post('/', noteController.createNote);

module.exports = note;
