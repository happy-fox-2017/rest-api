var db = require('../models');

function getAllUsers(req,res){
  db.Users.findAll()
  .then(users => res.send(users))
  .catch(err => res.send(err))
}

function getSingleUser(req,res) {
  let id= req.params.id;
  db.Users.findById(id)
  .then(users => res.send(users))
  .catch(err => res.send(err))
}

function createUser(req,res) {
  db.Users.create({
    name: req.body.name,
    address: req.body.address,
    gender: req.body.gender,
    age: req.body.age,
    email: req.body.email
  })
  .then(users => res.send('Create User Success'))
  .catch(users => res.send(err))
}

function deleteUser(req,res) {
  db.Users.destroy(
  {
    where : {
      id : req.params.id
    }
  })
  .then(users => res.send(`Delete  id ${req.params.id} Succes`))
  .catch(err => res.send(err))
}


function updateUser(req,res) {
  db.Users.update(
    {
      name: req.body.name,
      address: req.body.address,
      gender: req.body.gender,
      age: req.body.age,
      email: req.body.email
    },
    {
      where : {
      id : req.params.id
    }
    }).then(user => {
    res.send(`user ${req.body.name} updated`)
  }).catch(user => {
    res.send(err)
  })
}

module.exports = {
  getAllUsers,getSingleUser,createUser,deleteUser,updateUser
};
