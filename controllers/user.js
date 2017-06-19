"use strict"
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const passwordHash = require('passowrd-hash');

var models = {};

models.index = function(req, res){
  User.findAll()
  .then((result)=>{
    res.send({
      data: result,
      msg: 'Getting data succsess!'
    })
  })
  .catch((err)=>{
    res.send({
      data: err,
      msg: 'Something wrong!!'
    })
  })
}

models.show = function(req, res){
  User.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((result)=>{
    res.send({
      data: result,
      msg: 'Getting one data success'
    })
  })
  .catch((err)=>{
    data: err,
    msg: 'something wrong!!'
  })
}
