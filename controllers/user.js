"use strict"
const jwt = require('jsonwebtoken');
const model = require('../models');
const passwordHash = require('password-hash');
const bcrypt = require('bcrypt');
const saltRounds = 18;
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
    console.log('ini data result-----------', result);
    console.log('ini body di update ----------', req.body)
    let body = req.body;
    let value = result.dataValues;
    result.updateAttributes({
      name: body.name || value.name,
      username: body.username || value.username,
      email: body.email || value.email,
      phone: body.phone || value.phone,
      password: bcrypt.hashSync(body.password, bcrypt.genSaltSync(saltRounds)) || value.password,
      role: body.role || 'user',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    })
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      res.send(err)
    })
  })
}

models.signup = function(req, res){
  console.log('ini req body--------', req.body);
  let body = req.body;
  body.password = bcrypt.hashSync(body.password, bcrypt.genSaltSync(saltRounds));
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
  if(user.hasOwnProperty('message')){
    res.send(user)
  } else {
    let token = jwt.sign({
            id: user.id,
            name: user.name,
            role: user.role
          }, 'rahasiabanget', {expiresIn: '1h'});
    res.send({
      name: user.name,
      token: token
    })
  }
  // model.User.findOne({
  //   where: {
  //     username: user.username
  //   }
  // })
  // .then((datas)=>{
  //   let data = datas.dataValues;
  //   if(data){
  //     if(bcrypt.compareSync(req.body.password, data.password)){
  //       let token = jwt.sign({
  //         id: data.id,
  //         name: data.name,
  //         username: data.username,
  //         password: data.password,
  //         email: data.email,
  //         phone: data.phone,
  //         role: data.role
  //       }, 'rahasiabanget', {expiresIn: '1h'});
  //       let sendUser = {
  //         id: data.id,
  //         name: data.name,
  //         role: data.role,
  //         token: token
  //       }
  //       res.send(sendUser);
  //     } else {
  //       res.send('username or password is wrong!')
  //     }
  //   } else {
  //     res.send({
  //       msg: 'Cannot find Username, please signup first!'
  //     })
  //   }
  // })
  // .catch((err)=>{
  //   res.send(err);
  // })
}

models.delete = function(req, res){
  model.User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(()=>{
    model.User.findAll()
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      res.send(err)
    })
  })
  .catch((err)=>{
    res.send(err)
  })
}

module.exports = models;
