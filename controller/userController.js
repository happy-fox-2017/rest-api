var db = require('../models')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var saltRounds = 10

var signup = function (req,res) {
  let hash = bcrypt.hashSync(req.body.password, saltRounds)
  db.User.create({
    name : req.body.name,
    email : req.body.email,
    password : hash,
    role : req.body.role
  }).then(user => {
    res.send(user)
  }).catch(err => {
    res.send(err)
  })
}

var signin = function (req,res) {
  db.User.findOne({where : {email : req.body.email}})
  .then(user => {
    let pass = bcrypt.compareSync(req.body.password, user.password)
    if (pass) {
      var token = jwt.sign({
        name : user.name,
        role : user.role
      }, 'rahasiakita')
      res.send(token)
    } else {
      res.send("Password wrong")
    }
  })
  .catch(err => {
    res.send("email is not found")
  })
}

var getAll = function (req,res) {
  db.User.findAll().then(users => {
    res.send(users)
  }).catch(err => {
    res.send(err)
  })
}

var search = function (req,res) {
  let searchName = req.query.name
  db.User.findAll({
    where : {
      name : {
        $like : `%${searchName}%`
      }
    }
  })
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.send(err)
  })
}

var getOne = function (req,res) {
  let id = req.params.id
  db.User.findById(parseInt(id)).then(user => {
    res.send(user)
  })
  .catch(err => {
    res.send(err)
  })
}

var create = function (req,res) {
  db.User.create({
    name : req.body.name,
    email : req.body.email,
    password : req.body.password
  }).then(user => {
    res.send(user)
  }).catch(err => {
    res.send(err)
  })
}


var remove = function (req,res) {
  db.User.destroy({where : {id : req.params.id}})
  .then(user => res.send(`${JSON.stringify(user)} destroyed`))
  .catch(err => res.send(err))
}

var update = function (req,res) {
  db.User.update(
    {
      name : req.body.name,
      email : req.body.email,
      password : req.body.password
    },
    {where : {id : req.params.id}}
  ).then(user => {
    res.send(`user ${req.body.name} updated`)
  }).catch(user => {
    res.send(err)
  })
}

// var patch = function () {
//   let attrib = req.body.attrib
//   let value = req.body.value
//   db.User.update(
//     {attrib : `'${value}'`},
//     {where : {id : req.params.id}}
//   ).then(user => {
//     res.send(`${user} updated`)
//   }).catch(err => res.send(err))
// }

module.exports = {getAll,getOne,create,remove,update,search,signin,signup}
