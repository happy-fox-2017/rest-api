var jwt = require('jsonwebtoken')

var userVerify = function (req,res,next) {
  jwt.verify(req.headers.token, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',function (err,decoded) {
    if (err) {
      res.send(err)
    } else {
      req.decoded = decoded
      next()
    }
  })
}

var adminVerify = function (req,res,next) {
  if (req.decoded.is_admin == true) {
    next()
  } else {
    res.send({msg: 'You are not admin, sorry'})
  }
}

module.exports = {
  userVerify,
  adminVerify
};
