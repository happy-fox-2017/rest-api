const db = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
require('dotenv').config()

const rahasia = process.env.KATA_KUNCI


function signUp(req, res, next) {
  var hash = bcrypt.hashSync(req.body.password, saltRounds);
  db.User.create({
    username: req.body.username,
    password: hash,
    email: req.body.email,
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date()
  }).then( data => {
    res.send("\nberhasil di buat")
  }).catch( err => {
    res.send(err)
  })
}

function signIn(req, res, next) {
  db.User.find({
    where: {
      username: req.body.username
    }
  }).then( data => {
    if (data == null) {
      res.send('username tidak ditemukan')
    } else {
      // console.log(data.password);
      if (bcrypt.compareSync(req.body.password, data.password)) {
        var token = jwt.sign({role: data.role, username: data.username}, rahasia);
        res.send("berhasil masuk, token: " + token)
      } else {
        res.send("password salah")
      }
    }
  })
}

function getAll(req, res, next) {
  db.User.findAll().then( data => res.send(data)).catch(err=> res.send(err))
}

function getOne(req, res, next) {
  db.User.find({
    where: {
      id: req.params.id
    }
  }).then( data => res.send(data) )
}

function deleteOne(req, res, next) {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then( () => res.send('berhasil di delete'))
}

function updateOne(req, res, next) {
  db.User.update({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      role: req.body.role,
      updateAt: new Date()
    }, {
      where: {
      id: req.params.id
    }
  }).then( () => {
    res.send('sudah terupdate')
  })
}

function cekUser(req, res, next) {
  if (req.headers.token) {
    let token = req.headers.token
    let decoded = jwt.verify(token, rahasia)
    if (decoded.role == "user" || decoded.role == "admin" ) {
      next()
    } else {
      res.send("sepertinya kamu bukan user ataupun admin")
    }
  } else {
    res.send("login dlu yah")
  }
}

function cekAdmin(req, res, next) {
  console.log(rahasia);
  console.log(process.env.KATA_KUNCI);
  if (req.headers.token) {
    let token = req.headers.token
    let decoded = jwt.verify(token, rahasia)
    if ( decoded.role == "admin" ) {
      next()
    } else {
      res.send("sepertinya kamu bukan ADMIN, maaf ADMIN only")
    }
  } else {
    res.send("login dlu yah")
  }
}

module.exports = {
  signIn,
  signUp,
  getAll,
  getOne,
  deleteOne,
  updateOne,
  cekUser,
  cekAdmin
}
