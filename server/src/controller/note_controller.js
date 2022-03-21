const db = require('../models/index');
const { checkPositiveNumber } = require('../utils/validate');
const { PAGE_OFFSET } = require('../utils/constants');

exports.createNote = async (ctx) => {
  const { content } = ctx.request.body;
  const { id: userId } = await ctx.state.user;

  try {
    await db.note.create({
      userId,
      content,
    });
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.status = 200;
};

exports.readNotes = async (ctx) => {
  const page = checkPositiveNumber(ctx.query.page) ? +ctx.query.page : 1;
  try {
    ctx.body = {
      result: await db.note.findAll({
        offset: (page - 1) * PAGE_OFFSET,
        limit: PAGE_OFFSET,
        order: [['createdAt', 'DESC']],
      }),
    };
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.status = 200;
};

exports.readNote = async (ctx) => {
  const { noteId } = ctx.params;
  try {
    ctx.body = {
      result: await db.note.findOne({ where: { id: noteId } }),
    };
  } catch (e) {
    return ctx.throw(500, e);
  }
  ctx.status = 200;
};

exports.updateNote = async (ctx) => {
  const { noteId } = ctx.params;
  const { content } = ctx.request.body;
  const { id: userId } = await ctx.state.user;
  try {
    const result = (await db.note.update(
      { content },
      { where: { id: noteId, userId } },
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

exports.deleteNote = async (ctx) => {
  const { noteId } = ctx.params;
  const { id: userId } = await ctx.state.user;
  try {
    const result = await db.note.destroy(
      { where: { id: noteId, userId } },
    );
    if (result !== 0) {
      ctx.status = 200; // 정상적인 요청
    } else {
      ctx.status = 400; // 잘못된 요청
    }
  } catch (e) {
    return ctx.throw(500, e);
  }
};
