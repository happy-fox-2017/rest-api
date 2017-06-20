var jwt = require('jsonwebtoken');

let authAdmin = function(req, res, next) {
  let type = jwt.verify(req.headers.token, 'secret-key')
   if (type.role == 'admin') {
    next()
  } else {
    console.log(type.role);
    res.send('you are not authorized')
  }
}

let authUser = (req, res, next) => {
  let type = jwt.verify(req.headers.token, 'secret-key')
  if ( req.headers.token == null) {
    res.redirect('/api/signin')
  } else if (type.role == 'user' || type.role == 'admin') {
    next()
  }
}

module.exports = {authAdmin, authUser};