const fs = require('fs/promises')
//запись файла асинхронно

fs.writeFile('./05/test.txt', 'Hello, World!')
    .then(() => console.log('File written'))
    .then(() => fs.appendFile('./05/test.txt', '\nHello, World!'))
    .then(() => console.log('File appended'))
    .then(() => fs.rename('./05/test.txt', './05/test2.txt'))
    .then(() => console.log('File renamed'))
    .catch((err) => {
        console.error(err)
    })
