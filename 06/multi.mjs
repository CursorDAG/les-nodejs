import { EventEmitter } from 'events'

const myEmitter = new EventEmitter()

myEmitter.on('myEvent', () => {
    console.log('First event listener')
})

myEmitter.on('myEvent', () => {
    console.log('Second event listener')
})

myEmitter.on('otherEvent', () => {
    console.log('Other event listener')
}) 


myEmitter.setMaxListeners(25)
console.log(myEmitter.getMaxListeners())

setTimeout(() => myEmitter.emit('myEvent'), 1000)

setTimeout(() => myEmitter.emit('otherEvent'), 1000)