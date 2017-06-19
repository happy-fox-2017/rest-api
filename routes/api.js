var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
router.post('/signup', function(req, res, next) {
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    createdAt: new Date(),
    updatedAt: new Date()
  }).then( data => {
    res.send("\nberhasil di buat")
  }).catch( err => {
    res.send(err)
  })
});

router.post('/signin', function(req, res, next) {
  db.User.find({
    where: {
      username: req.body.username
    }
  }).then( data => {
    if (data == null) {
      res.send('username tidak ditemukan')
    } else {
      if (req.body.password == data.password) {
        res.send("berhasil masuk")
      } else {
        res.send("password salah")
      }
    }
  })

});

router.get('/users', function(req, res, next) {
  db.User.findAll().then( data => res.send(data))
});

router.get('/users/:id', function(req, res, next) {
  db.User.find({
    where: {
      id: req.params.id
    }
  }).then( data => res.send(data) )
});
// create users | admiin only
router.post('/users', function(req, res, next) {

});

router.delete('/users/:id', function(req, res, next) {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then( () => res.send('berhasil di delete'))
});

router.put('/users/:id', function(req, res, next) {
  db.User.update({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      updateAt: new Date()
    }, {
      where: {
      id: req.params.id
    }
  }).then( () => {
    res.send('sudah terupdate')
  })
});

module.exports = router;
