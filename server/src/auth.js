const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
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
  const salt = crypto.randomBytes(64).toString('base64');
  const scryptPassword = crypto.scryptSync(password, salt, 64).toString('base64');
  user = await db.user.create({
    name,
    password: scryptPassword,
    salt,
  });
  return done(null, user);
}));
