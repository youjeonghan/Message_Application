const Router = require('koa-router');

const router = new Router();
const notes = require('./note');

router.use('/notes', notes.routes());

module.exports = router;
