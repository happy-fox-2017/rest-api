'use strict'
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var auth = {}

auth.adminOnly = function(req, res, next){
  let token = req.headers.token;
  if (token) {
    let decode = jwt.verify(token, 'rahasiabanget');
    if(decode.role === 'admin'){
      next();
    } else {
      res.send('You are not authorized!, Just admin can make this methode');
    }
  } else {
    res.send('You are not login, please login first!')
  }
}

module.exports = auth;
