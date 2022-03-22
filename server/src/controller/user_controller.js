const passport = require('koa-passport');

exports.signUser = (ctx) => passport.authenticate(
  'sign',
  (err, user) => {
    if (user === false) {
      ctx.status = 409;
      ctx.redirect('/sign');
    }
    ctx.status = 201;
    ctx.redirect('/');
  },
)(ctx);

exports.login = (ctx) => passport.authenticate(
  'login',
  (err, user) => {
    if (user === false) {
      ctx.status = 401;
      ctx.redirect('/login');
    }
    ctx.cookies.set('userId', user.name, { httpOnly: false });
    ctx.status = 200;
    ctx.redirect('/');
    return ctx.login(user);
  },
)(ctx);
