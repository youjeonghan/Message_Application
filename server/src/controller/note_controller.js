const db = require('../models/index');

exports.createNote = (ctx, next) => {
  const { content } = ctx.request.body;
  db.note.create({
    user_id: 1,
    content,
  });
};
