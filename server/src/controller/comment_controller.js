const db = require('../models/index');

exports.createComment = async (ctx) => {
  const { noteId } = ctx.params;
  const { content } = ctx.request.body;
  const { id: userId } = await ctx.state.user;

  try {
    await db.comment.create({
      noteId,
      userId,
      content,
    });
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.status = 200;
};
