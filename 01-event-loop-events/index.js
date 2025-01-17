const fs = require('fs')
const dns = require('dns')

function info(text) {
    console.log(text, performance.now().toFixed(2))
}

info('program start')

//setTimeout
setTimeout(() => info('setTimeout')) //вызывается после всех setTimeout
setTimeout(() => {
    process.nextTick(() => info('nextTick 2')) //вызывается после всех setTimeout
    info('setTimeout2')
}) //вызывается после всех setTimeout

//readFile
fs.writeFile('test.txt', 'Hello Node.js', (err) => info('write file')) //вызывается последним в цикле

//promise
Promise.resolve()
    .then(() => info('promise1')) //вызывается после nextTick
    .then(() => info('promise2'))

//nextTick
process.nextTick(() => info('nextTick 1')) //вызывается сразу после всех setTimeout

//setImmediate
setImmediate(() => info('setImmediate')) //вызывается после nextTick

//setInterval
let intervalCount = 0

const intervalId = setInterval(() => {
    info(`setInterval ${++intervalCount}`)
    if (intervalCount === 3) {
        clearInterval(intervalId)
    }
}, 10)

//dns i/o
dns.lookup('localhost', (err, address, family) => {
    info('dns lookup', address, performance.now())
}) //вызывается после всех setTimeout

info('program end') //вызывается первым
