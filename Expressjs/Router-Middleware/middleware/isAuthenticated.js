const isAuthenticated = (req, res, next) => {
  const isLogin = true;
  if (isLogin) {
    next();
  } else {
    res.json({
      message: "UnAthourized",
    });
  }
};
module.exports = isAuthenticated;
