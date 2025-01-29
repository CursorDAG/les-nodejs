const fs = require('fs')
//запись файла асинхронно

fs.writeFile('./05/test.txt', 'Hello, World!', (err) => {
    if (err) console.error(err)
    else {
        console.log('File written')
        fs.appendFile('./05/test.txt', 'Hello, World!', (err) => {
            if (err) console.error(err)
            else {
                console.log('File appended')
                fs.rename('./05/test.txt', './05/test2.txt', (err) => {
                    if (err) console.error(err)
                    else console.log('File renamed')
                })
            }
        })
    }
})
