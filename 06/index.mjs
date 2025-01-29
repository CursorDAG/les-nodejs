import { EventEmitter } from 'events'

const myEmitter = new EventEmitter()

myEmitter.on('timeout', (secQty) => {
    console.log(`Timeout event with ${secQty} seconds`)
})

myEmitter.on('newUser', (userName) => {
    console.log(`New user registered: ${userName}`)
})

// myEmitter.emit('newUser', 'Batyr')
setTimeout(() => myEmitter.emit('timeout', 1), 1000)
setTimeout(() => myEmitter.emit('timeout', 2), 2000)
