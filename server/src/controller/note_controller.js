const db = require('../models/index');

exports.createNote = async (ctx, next) => {
  const { content } = ctx.request.body;
  try {
    await db.note.create({
      user_id: 1,
      content,
    });
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.status = 200;
};
