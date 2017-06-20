const bacatoken = require('./TokenContoller');

let admin = function (req,res,next) {
    let datatoken = bacatoken.readToken(req.headers.token);
    if(datatoken.role == "Admin"){
        next();
    }else if(datatoken == null){
        res.send(`Sorry your data Token is null or Wrong`);
    }else {
        res.send('admin only');
    }
    return datatoken;
};

let user = function (req,res,next) {
    let datatoken = bacatoken.readToken(req.headers.token);
    if(datatoken.role == "User" || datatoken.role == "Admin"){
        next();
    }else {
       res.send('User Only');
    }
    return datatoken;
};



module.exports = {
    admin,
    user
};