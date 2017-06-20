var db = require('../models');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
///////////////////////////////

var findAll = (req, res) => {
  db.users.findAll({
    where: {role: 'user'}
  })
  .then((data)=>{
    if (data.length >= 1) {
      res.send(data)
    }else {
      res.send('no data in list')
    }
  })
  .catch(err=>{
    console.log(err);
  })
}

let findOne = (req, res)=> {
  db.users.findOne({
    where :{
      id: req.params.id
    }
  })
  .then(data =>{
    res.send(data)
  })
}

let createUser = (req, res)=> {
  var hash = bcrypt.hashSync(req.body.password, salt);
  // console.log(hash);
  db.users.create({
    name: req.body.name,
    email: req.body.email,
    userName: req.body.userName,
    password: hash,
    role: 'user'
  })
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    console.log(err);
  })
}

let deleteUser = (req, res)=> {
  db.users.destroy({where: {id: req.params.id}})
  .then(()=>{
    res.send('delete success')
  })
}

let updateUser = (req, res)=> {
  db.users.update({
    name: req.body.name,
    email: req.body.email,
    userName: req.body.userName,
    password: req.body.password ,
    role: req.body.role
  },{where: {id: req.params.id}})
  .then(data=>{
    res.send(data )
  })
} 

let signin = (req, res)=> {
  db.users.findOne({
    where:{userName: req.body.userName}
  })
  .then(data =>{
    // res.send(data)
    if(bcrypt.compareSync(req.body.password, data.password)){
      var token = jwt.sign({userName: data.username, role: data.role},'secret-key')
      res.send('berhasil login ' + token)
    }else {
      res.send('invalid username or password')
    }
  })                                                    
}

let signup = (req, res)=> {
  var hash = bcrypt.hashSync(req.body.password, salt);
  // console.log(hash);
  db.users.create({
    name: req.body.name,
    email: req.body.email,
    userName: req.body.userName,
    password: hash,
    role: req.body.role
  })
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    console.log(err);
  })
}




module.exports = {
  findAll,
  findOne,
  createUser,
  deleteUser,
  updateUser,
  signin,
  signup
}
