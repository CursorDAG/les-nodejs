import EventEmitter from 'events'
import fs from 'fs'

const fileElement = new EventEmitter()

const filePath = './06/first.txt'

fileElement.on('writeComplete', () => {
    console.log(`File ${filePath} written successfully`)
    fs.appendFile(filePath, '\nHello, World!', () => {
        fileElement.emit('appendComplete')
    })
})

fileElement.on('appendComplete', () => {
    console.log(`File ${filePath} appended successfully`)
    fs.rename(filePath, './06/secon5d.txt', () => {
        console.log('File renamed successfully')
    })
})

fs.writeFile(filePath, 'Hello, World!', () => {
    fileElement.emit('writeComplete')
})
