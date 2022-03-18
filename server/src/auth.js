const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./models/index');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});

passport.use('sign', new LocalStrategy({
  usernameField: 'name',
  passwordField: 'password',
  passReqToCallback: true,
}, async (req, name, password, done) => {
  let user = await db.user.findOne({
    where: {
      name,
    },
  });
  if (user) {
    return done(null, false);
  }

  user = await db.user.create({
    name,
    password,
  });
  return done(null, user);
}));
