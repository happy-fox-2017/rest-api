"use strict"
const jwt = require('jsonwebtoken');
const model = require('../models');
const passwordHash = require('password-hash');

//var User = new model.User();
var models = {};

models.index = function(req, res){
  model.User.findAll()
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
  model.User.findOne({
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
    res.send({
      data: err,
      msg: 'something wrong!!'
    })
  })
}

models.update = function(req, res){
  model.User.findOne({
    where: {
      id: req.params.id
    }
  })
  .then((result)=>{
    let body = req.body;
    let value = result.dataValues;
    result.updateAttributes({
      name: body.name || value.name,
      username: body.username || value.username,
      email: body.email || value.email,
      phone: body.phone || value.phone,
      password: passwordHash.generate(body.password) || value.password,
      role: body.role || 'user'
    })
  })
}

module.exports = models;
