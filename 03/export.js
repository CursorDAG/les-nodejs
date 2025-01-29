const { myName, myHobbies } = require('./multiple')  //импортируем переменные из файла multiple.js

const myFriendName = 'John'

//экспортируем переменные из этого файла

module.exports.myName = myName
module.exports.myFriendName = myFriendName
module.exports.myGreatHobbies = myHobbies
