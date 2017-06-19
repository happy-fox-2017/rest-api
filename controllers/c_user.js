var db = require('../models')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);

var signup = function (req, res, next) {

  var hash = bcrypt.hashSync(req.body.password, salt);
  db.user.create({
    name: req.body.name,
    username: req.body.username,
    password: hash,
    role: req.body.role,
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err.message)
  })
}

var signin = function (req, res, next) {
  db.user.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(result => {
    if (bcrypt.compare(req.body.password, result.password)) {
      var token = jwt.sign({username: result.username, role: result.role}, 'Myscret24@!!createisds!okdoskdokaDONTcop!!')
      res.send(token)
    } else {
      res.send('no such user!')
    }
  })
  .catch(err => {
    res.send(err.message)
  })
}

var add = function (req, res, next) {
  var hash = bcrypt.hashSync(req.body.password, salt);
  db.user.create({
    name: req.body.name,
    username: req.body.username,
    password: hash,
    role: req.body.role,
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err.message)
  })
}

var remove = function (req, res, next) {
  let id = req.params.id
  db.user.findById(id)
  .then(result => {
    db.user.destroy({
      where: {
        id: result.id
      }
    })
    .then(() => {
      res.send("user deleted!")
    })
    .catch(err => {
      res.send(err.message)
    })
  })
  .catch(err => {
    res.send(err.message)
  })
}

var getAll = function (req, res, next) {
  db.user.findAll()
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err.message)
  })
}

var getById = function (req, res, next) {
  let id = req.params.id
  db.user.findById(id)
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err.message)
  })
}

var edit = function (req, res, next) {
  var id = req.params.id
  db.user.findById(id)
  .then(result => {
    db.user.update({
      name: req.body.name || result.name,
      username: req.body.username || result.username,
      password: req.body.password || result.password,
      role: req.body.role || result.role,
    }, {
      where: {
        id : id
      }
    })
    res.send(result)
  })
  .catch(err => {
    res.send(err.message)
  })
}

module.exports = {
  signup,
  signin,
  add,
  remove,
  getAll,
  getById,
  edit

}
