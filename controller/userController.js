var db = require('../models')

var getAll = function (req,res) {
  db.User.findAll().then(users => {
    res.send(users)
  }).catch(err => {
    res.send(err)
  })
}

var search = function (req,res) {
  let searchName = req.query.name
  console.log(searchName);
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

module.exports = {getAll,getOne,create,remove,update,search}
