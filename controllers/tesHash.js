var bcrypt = require('bcrypt');

var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync('ade123', salt);

console.log(hash);