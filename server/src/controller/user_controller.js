const passport = require('koa-passport');
const db = require('../models/index');

exports.signUser = passport.authenticate('sign', {
  successRedirect: '/',
  failureRedirect: '/',
  failureFlash: true,
});
