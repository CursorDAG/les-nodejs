import { dodo, temperature } from './constans.mjs'
import { isRaining, humidity } from './inline.mjs'
import getDataFromServer from './default.mjs'

console.log(`season is ${dodo}`)
console.log(temperature)

console.log(isRaining)
console.log(humidity)

getDataFromServer('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data))
    .catch(err => console.error(err))
