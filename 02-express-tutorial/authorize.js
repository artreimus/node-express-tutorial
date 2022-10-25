const authorize = (req, res, next) => {
  const { user } = req.query;

  if (user === 'arthur') {
    req.user = { name: user, id: 3 };
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
  console.log('authorize');
  next();
};

module.exports = authorize;
