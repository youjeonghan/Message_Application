const passport = require('koa-passport');
const db = require('../models/index');

exports.signUser = (ctx) => passport.authenticate(
  'sign',
  {
    successRedirect: '/',
    failureRedirect: '/',
  },
  (err, user) => {
    if (user === false) {
      ctx.throw(409);
    }
    ctx.status = 201;
  },
)(ctx);

exports.login = (ctx) => passport.authenticate(
  'login',
  {
    successRedirect: '/',
    failureRedirect: '/',
  },
  (err, user) => {
    if (user === false) {
      ctx.throw(401);
    }
    ctx.status = 200;
    return ctx.login(user);
  },
)(ctx);
