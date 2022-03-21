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

exports.updateComment = async (ctx) => {
  const { commentId } = ctx.params;
  const { content } = ctx.request.body;
  const { id: userId } = await ctx.state.user;
  try {
    const result = (await db.comment.update(
      { content },
      { where: { id: commentId, userId } },
    ))[0];
    if (result !== 0) {
      ctx.status = 200; // 정상적인 요청
    } else {
      ctx.status = 400; // 잘못된 요청
    }
  } catch (e) {
    return ctx.throw(500, e);
  }
};

