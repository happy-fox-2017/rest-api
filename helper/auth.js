
var jwt = require('jsonwebtoken')

var authAll = function (req,res,next) {
  let token = req.headers.token
  if (!token) {
    res.send('belum sign in')
  }
  let decode = jwt.verify(token, 'rahasiakita')
  if (decode) {
    next()
  } else {
    res.send("gagal decode")
  }
}

var authUser = function (req,res,next) {
  let token = req.headers.token
  if (!token) {
    res.send('belum sign in')
  }
  let decode = jwt.verify(token, 'rahasiakita')
  if (decode && decode.user.role == "user") {
    next()
  } else {
    res.send("role kamu bukan user")
  }
}

var authAdmin = function (req,res,next) {
  let token = req.headers.token
  console.log(`--------masuk auth admin`);
  if (!token) {
    res.send('belum sign in')
  }
  let decode = jwt.verify(token, 'rahasiakita')
  if (decode && decode.role == "admin") {
    next()
  } else {
    res.send("salah token")
  }
}

module.exports = {authUser, authAdmin, authAll}
