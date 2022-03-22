const Router = require('koa-router');

const router = new Router();

router.get('/', async (ctx) => { await ctx.render('index'); });
router.get('/login', async (ctx) => { await ctx.render('login'); });
router.get('/sign', async (ctx) => { await ctx.render('sign'); });
router.get('/post', async (ctx) => { await ctx.render('post'); });

module.exports = router;
