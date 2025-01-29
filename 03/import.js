const { myName, myFavoriteNumber, myHobbies } = require('./multiple')
const greeting = require('d:/code/les-nodejs/03/single.js')

console.log(myFavoriteNumber) // 77
console.log(myName) // Batyr
console.log(myHobbies) // ['coding', 'reading', 'gaming']

greeting(myName) // Hello, Batyr!
