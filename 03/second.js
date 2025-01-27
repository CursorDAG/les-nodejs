const userArray = require('./users')
const path = require('path')


userArray.forEach(user => console.log(user.charAt(0).toUpperCase() + user.slice(1)))
