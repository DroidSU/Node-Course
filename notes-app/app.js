const validator = require('validator')
const getNotes = require('./utils')

const string = getNotes()

console.log(string)
console.log(validator.isEmail('sujoydatta26@gmail.com'))