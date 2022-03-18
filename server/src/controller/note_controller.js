const db = require('../models/index');

exports.createNote = async (ctx) => {
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

exports.readAllNote = async (ctx) => {
  try {
    ctx.body = {
      result: await db.note.findAll({}),
    };
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.status = 200;
};
