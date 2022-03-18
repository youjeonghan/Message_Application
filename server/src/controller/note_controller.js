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

exports.updateNote = async (ctx) => {
  const { id: noteId } = ctx.params;
  const { content } = ctx.request.body;
  const { id: userId } = await ctx.state.user;
  try {
    const note = (await db.note.update(
      { content },
      { where: { id: noteId, user_id: userId } },
    ))[0];
    if (note !== 0) {
      ctx.status = 200; // 정상적인 요청
    } else {
      ctx.status = 400; // 잘못된 요청
    }
  } catch (e) {
    return ctx.throw(500, e);
  }
};
