var db = require('../models')
var jwt = require('jsonwebtoken')
require('dotenv').config()

var authAdmin = function(req, res, next) {
  let token = req.headers.token
  if(token) {
    jwt.verify(token, process.env.secret, (err, decoded) => {
      if(!err) {
        if(decoded.role.toLowerCase() == "admin") {
          next()
        } else {
          res.send({msg: 'you are not authorized!'})
        }
      } else {
        res.send(err)
      }
    })
  } else {
    res.send({msg: 'Not logged in'})
  }
}

var authUser = function(req, res, next) {
  let token = req.headers.token
  if(token) {
    jwt.verify(token, process.env.secret, (err, decoded) => {
      if(!err) {
        if(decoded.role.toLowerCase() == "user") {
          next()
        } else {
          res.send({msg: 'you are not authorized!'})
        }
      } else {
        res.send(err)
      }
    })
  } else {
    res.send({msg: 'Not logged in'})
  }
}

var all = function(req, res, next) {
  let token = req.headers.token
  if(token) {
    jwt.verify(token, process.env.secret, (err, decoded) => {
      if(!err) {
        if(decoded.role.toLowerCase() == "user" || decoded.role.toLowerCase() == "admin") {
          next()
        } else {
          res.send({msg: 'you are not authorized!'})
        }
      } else {
        res.send(err)
      }
    })
  } else {
    res.send({msg: 'Not logged in'})
  }
}



module.exports = {
  authUser,
  authAdmin,
  all
}
