const { myName, myFavoriteNumber, myHobbies } = require('./multiple') //импортируем переменные из файла multiple.js
const {
    myName: mySecondName,
    myFriendName,
    myGreatHobbies,
} = require('./export') //импортируем переменные из файла export.js
const greeting = require('./myModules/single') //импортируем функцию greeting из файла single.js
//const greeting = require('d:/code/les-nodejs/03/single.js')

//importing from multiple.js

console.log(myFavoriteNumber) // 77
console.log(myName) // Batyr
console.log(myHobbies) // ['coding', 'reading', 'gaming']

myHobbies.push('cooking')

//importing from single.js

greeting(myName) // Hello, Batyr!

//Importing from export.js qq

console.log(mySecondName) // Batyr
console.log(myFriendName) // John
console.log(myGreatHobbies) // Batyr
