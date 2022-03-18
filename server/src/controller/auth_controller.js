exports.certify = (ctx, next) => {
  if (ctx.isAuthenticated()) {
    return next();
  }
  ctx.redirect('/');
};
