const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const db = require('./models/index');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = db.user.findOne({ where: { id } });
  done(null, user);
});

passport.use('sign', new LocalStrategy({
  usernameField: 'name',
  passwordField: 'password',
}, async (name, password, done) => {
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

passport.use('login', new LocalStrategy({
  usernameField: 'name',
  passwordField: 'password',
}, async (name, password, done) => {
  const user = await db.user.findOne({
    where: {
      name,
    },
  });

  // 해당 user가 없는 경우
  if (user === null) {
    return done(null, false);
  }

  // password가 틀린 경우
  const scryptPassword = crypto.scryptSync(password, user.salt, 64).toString('base64');
  if (scryptPassword !== user.password) {
    return done(null, false);
  }

  // name, password 모두 일치
  return done(null, user);
}));
