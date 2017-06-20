let db = require('../models');
const has = require('./HasingPassword');
const token = require('./TokenContoller');

let FindUser = function (req,res){
    db.User.findAll()
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            console.log(err);
        })
};

let FindUserbyId = function (req,res){
    let id = req.params.id;
    db.User.findById(id)
        .then(user => {
            res.send(user);
        })
        .catch(err =>{
            console.log(err);
        })
};

let signInUser = function (req,res) {
    let data = req.body;
    db.User.findOne({
        where : {
            name : data.name
        }
    })
        .then(dataUser => {
            if(dataUser == null) {
                res.send('Username Wrong !');
            }else{
                if(has.checkHassing(data.password,dataUser.password)){
                    let t = token.createToken(dataUser.name,dataUser.role);
                    res.send(`your token is here : ${t}`);
                } else {
                    res.send('Password Salah');
                }
            }
        })
};

let addDataUser = function (req,res) {
    let newData = req.body;
    db.User.create({
        name : newData.name,
        password : has.hassing(newData.password),
        bio : newData.bio,
        gender : newData.gender,
        role : newData.role
    })
        .then(()=>{
            res.send("berhasil di tambahkan")
        })
        .catch(err =>{
            console.log(err);
        })
};

let deleteDataUser = function (req,res) {
    let id = req.params.id;
    db.User.destroy({
        where : {id:id}
    })
        .then(()=>{
            res.send(`berhasil di delete 1 record dengan id = ${id}`);
        })
        .catch(err => {
            console.log(err)
        })
};

let updateDataUser = function (req,res){
    let id = req.params.id;
    let dataUpdate = req.body;
    db.User.update({
        name : dataUpdate.name,
        password : dataUpdate.password,
        bio : dataUpdate.bio,
        gender : dataUpdate.gender,
        role : dataUpdate.role
    },{
        where : {id:id}
    })
        .then(()=>{
            res.send(`berhasil di update`);
        })
        .catch(err =>{
            console.log(err);
        })
};


module.exports = {
    FindUser,
    FindUserbyId,
    addDataUser,
    deleteDataUser,
    updateDataUser,
    signInUser
};