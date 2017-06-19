const jwt = require('jsonwebtoken');

const TOKEN_PASSWORD = 'mypassword';

const isAuthorized = function(req, res, next) {
  const token = req.headers.token;

  jwt.verify(token, TOKEN_PASSWORD, function(err, decoded) {
    if (decoded && decoded.role === 'admin') {
      next();
    } else {
      res.send('Unauthorized', 403);
    }
  });
};

module.exports = isAuthorized;
