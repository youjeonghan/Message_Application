const Router = require('koa-router');

const router = new Router();
const notes = require('./note');
const users = require('./user');

router.get('/', async (ctx) => { await ctx.render('index'); });
router.use('/notes', notes.routes());
router.use('/users', users.routes());

module.exports = router;
