const jwt = require('jsonwebtoken');

let createToken = function (name,role) {
    let token = jwt.sign({
        name : name,
        role : role
    }, 'secretkey');
    return token;
};

let readToken = function (token) {
    let hasil = jwt.verify(token,'secretkey');
    return hasil;
};

module.exports = {
    createToken,
    readToken
};