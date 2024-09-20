const isAuth = (req, res, next) => {
  const { id } = req.cookies;
  if (id) return next();
  return res.redirect("/users/login");
};

module.exports = isAuth;
