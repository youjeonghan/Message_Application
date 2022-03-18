require('dotenv').config();
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const passport = require('koa-passport');
const router = require('./api');
require('./auth');

const app = new Koa();
app.keys = ['secret'];
app.use(bodyParser());
app.use(session({}, app));
app.use(passport.initialize());
app.use(passport.session());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
