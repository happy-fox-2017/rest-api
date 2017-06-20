var bcrypt = require('bcrypt')
const saltRounds = 10;
const pass = "admin"

var hash = bcrypt.hashSync(pass,saltRounds)

console.log(`hasil hash > ${hash}`)

console.log('di decrypt balik ',bcrypt.compareSync("haselem",hash))
