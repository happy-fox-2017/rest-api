// var bcrypt = require('bcrypt');
// var salt = bcrypt.genSaltSync(9);
// var hash = bcrypt.hashSync('1234', salt);
//
// console.log(hash);

var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'secret-key');
var decoded = jwt.verify(token, 'secret-key');

console.log(token);
console.log(decoded.foo);