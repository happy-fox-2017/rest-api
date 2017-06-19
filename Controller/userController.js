var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
var db = require('../models')
var jwt = require('jsonwebtoken');


let findSemuaUsers = function(req, res, next) {
  db.User.findAll({
    where: {
      role: 'user'
    }
  })
  .then((users) => {
    // console.log(users);
    if (users.length == 0) {
       res.send('there is no user listed')
    }
    else {
      res.send(users)
    }
  })
}

let findMelaluiId = function(req, res, next) {
  db.User.findById(req.params.id)
  .then((user) => {
    res.send(user)
  })
}

let bikinUser = function(req, res, next){
  let hashNih = function(pass) {
    var hash = bcrypt.hashSync(pass, salt);
    return hash
  };

  db.User.create({
    username: req.body.username,
    password: hashNih(req.body.password),
    role: 'user',
    name: req.body.name
  })
  .then(() => {
    res.send('data created');
  })
}

let hapusUser =  function(req, res) {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.send('data deleted')
  })
}

let perbaharuiUser =  function(req,res) {
  db.User.update({
    name: req.body.name,
    username: req.body.username
  },{
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.send('data updated')
  })
}

let signin = (req, res) => {
  db.User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(user => {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      // console.log(user.role);
      var token = jwt.sign({name: user.name, role: user.role}, 'secret-key')
      // req.headers.token = token
      // console.log(token);
      res.send('masuk, token: ' + token)
    } else {
      res.send('username or password not matched')
    }
  })
}

module.exports = {findSemuaUsers, findMelaluiId, bikinUser, hapusUser, perbaharuiUser, signin};