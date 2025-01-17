const fs = require('fs')

fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (!err) {
        console.log('data:')
    }
    return console.log('Error reading file')
})

console.log('End of script')

setImmediate(() => {
    console.log('Immediate')
}) // Immediate
