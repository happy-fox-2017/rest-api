var db = require('../models');
var jwt = require('jsonwebtoken')
var hash = require('object-hash')

var signUp = function (req,res) {
  db.User.create({
    username : req.body.username,
    password : hash(req.body.password),
    is_admin : false
  })
  .then(function (user) {
    res.send(user)
  })
  .catch(function (err) {
    res.send(err)
  })
}

var getAll = function (req,res) {
  db.User.findAll()
  .then(function (users) {
    res.send(users)
  })
  .catch(function (err) {
    res.send(err)
  })
}

var signIn = function (req,res) {
  db.User.findOne({
    where: {
      username : req.body.username
    }
  })
  .then(function (user) {
    if (user === null) {
      res.send({msg: `Username ${req.body.username} not found`})
    } else {
      if (user.password == hash(req.body.password)) {
        res.send({token: jwt.sign({id: user.id, username : user.username, is_admin : user.is_admin}, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit')})
      } else {
        res.status(401).send({msg: `Password not match for username ${req.body.username}`})
      }
    }
  })
  .catch(function (err) {
    res.send(err)
  })
}

module.exports = {
  signUp,
  signIn,
  getAll
};
