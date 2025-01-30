import { EventEmitter } from 'events'

const myEmitter = new EventEmitter()

const timeoutListenerFn = (secQty) => {
    console.log(`Timeout event with ${secQty} seconds`)
}

//создание обработчика события

myEmitter.on('timeout', timeoutListenerFn)

myEmitter.on('newUser', (userName) => {
    console.log(`New user registered: ${userName}`)
})



// myEmitter.emit('newUser', 'Batyr')
setTimeout(() => myEmitter.emit('timeout', 1), 1000)
setTimeout(() => myEmitter.emit('timeout', 2), 2000)

//обработчик сработает только один раз
myEmitter.once('onceEvent', () => {
    console.log('This event will be triggered only once')
})

setTimeout(() => myEmitter.emit('onceEvent'), 500)
setTimeout(() => myEmitter.emit('onceEvent'), 1500)

setTimeout(() => myEmitter.off('timeout', timeoutListenerFn), 3000)
setTimeout(() => myEmitter.emit('timeout', 4), 4000)
