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
        res.send({token: jwt.sign({id: user.id, is_admin : user.is_admin}, process.env.JWT)})
      } else {
        res.status(401).send({msg: `Password not match for username ${req.body.username}`})
      }
    }
  })
  .catch(function (err) {
    res.send(err)
  })
}

var deleteUser = function (req,res) {
  if (req.decoded.is_admin === true) {
    db.User.findOne({
      where : {
        id : req.params.id
      }
    })
    .then(function (user) {
      if (user === null) {
        res.send({msg: `User with id ${req.params.id} not found`})
      } else {
        user.destroy()
        .then(function (success) {
          res.send({msg: `Delete user with id ${req.params.id}`})
        })
        .catch(function (err) {
          res.send(err)
        })
      }
    })
  } else {
    db.User.findOne({
      where : {
        id : req.decoded.id
      }
    })
    .then(function (user) {
      if (user === null) {
        res.send({msg: `User with id ${req.decoded.id} not found`})
      } else {
        user.destroy()
        .then(function (success) {
          res.send({msg: `Delete user with id ${req.decoded.id}`})
        })
        .catch(function (err) {
          res.send(err)
        })
      }
    })
  }
}

var getUser = function (req,res) {
  if (req.decoded.is_admin === true) {
    db.User.findOne({
      where: {
        id : req.params.id
      }
    })
    .then(function (user) {
      res.send(user)
    })
    .catch(function (err) {
      res.send(err)
    })
  } else {
    db.User.findOne({
      where: {
        id : req.decoded.id
      }
    })
    .then(function (user) {
      res.send(user)
    })
    .catch(function (err) {
      res.send(err)
    })
  }
}

var updateUser = function (req,res) {
  if (req.decoded.is_admin === true) {
    db.User.findOne({
      where : {
        id : req.params.id
      }
    })
    .then(function (user) {
      user.update({
        username : req.body.username || user.username,
        password : hash(req.body.password) || user.password
      })
      .then(function (user) {
        res.send({msg: `Data user id ${req.params.id} updated`})
      })
      .catch(function (err) {
        res.send(err)
      })
    })
    .catch(function (err) {
      res.send(err)
    })
  } else {
    db.User.findOne({
      where : {
        id : req.decoded.id
      }
    })
    .then(function (user) {
      user.update({
        username : req.body.username || user.username,
        password : hash(req.body.password) || user.password
      })
      .then(function (user) {
        res.send({msg: `Data user id ${req.decoded.id} updated`})
      })
      .catch(function (err) {
        res.send(err)
      })
    })
    .catch(function (err) {
      res.send(err)
    })
  }
}

var signUpAdmin = function (req,res) {
  db.User.create({
    username : req.body.username,
    password : hash(req.body.password),
    is_admin : true
  })
  .then(function (user) {
    res.send(user)
  })
  .catch(function (err) {
    res.send(err)
  })
}

module.exports = {
  signUp,
  signIn,
  getAll,
  deleteUser,
  getUser,
  updateUser,
  signUpAdmin
};
