require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const passport = require('koa-passport');
const views = require('koa-views');
const apiRouter = require('./api');
const router = require('./routes');

const render = views(`${__dirname}/views`, {
  map: { html: 'underscore' },
});

require('./auth');

const app = new Koa();
app.keys = ['secret'];
app.use(render);
app.use(bodyParser());
app.use(session({}, app));
app.use(passport.initialize());
app.use(passport.session());
app.use(router.routes());
app.use(apiRouter.routes());
app.use(apiRouter.allowedMethods());

app.listen(3000);
