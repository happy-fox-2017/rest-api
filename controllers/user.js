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
      role: body.role || 'user',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })
  })
}

models.signup = function(req, res){
  let body = req.body;
  body.password = passwordHash.generate(body.password);
  body.createdAt = new Date().toISOString();
  body.updatedAt = new Date().toISOString();
  body.role = body.role || 'user';
  model.User.create(body)
  .then((result)=>{
    res.send({
      data: result,
      msg: 'create data berhasil'
    })
  })
  .catch((err)=>{
    res.send(err);
  })
}

models.signin = function(req, res, next){
  let user = req.user;
  model.User.findOne({
    where: {
      username: user.username
    }
  })
  .then((data)=>{
    if(data){
      let token = jwt.sign({
        id: data.id,
        name: data.name,
        role: data.role
      }, 'rahasiabanget', {expiresIn: '1h'});
      let sendUser = {
        id: data.id,
        name: data.name,
        role: data.role,
        token: token
      }
      res.send(sendUser);
    } else {
      res.send({
        msg: 'Cannot find Username, please signup first!'
      })
    }
  })
  .catch((err)=>{
    res.send(err);
  })
}
module.exports = models;
