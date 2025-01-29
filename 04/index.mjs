import { dodo, temperature } from './constans.mjs'
import { isRaining, humidity } from './inline.mjs'
import getDataFromServer from './default.mjs'
import DEFAUL_SERVER, { USERNAME, PASSWORD } from './mixed.mjs'

console.log(`season is ${dodo}`)
console.log(temperature)

console.log(isRaining)
console.log(humidity)

getDataFromServer('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data))
    .catch(err => console.error(err))

console.log(DEFAUL_SERVER)
console.log(USERNAME, PASSWORD)
