import fs from 'fs/promises'

fs.readFile('./05/fs.js', 'utf8') //чтение файла в кодировке utf8 асинхронно
    .then((data) => console.log(data))
    .catch((err) => console.error(err))

fs.writeFile('./05/test.txt', 'Hello, World!', 'utf8') //запись файла в кодировке utf8 асинхронно
    .then(() => console.log('File written'))
    .catch((err) => console.error(err))

fs.appendFile('./05/test.txt', 'Hello, World!', 'utf8') //
    .then(() => console.log('File appended'))
    .catch((err) => console.error(err))

fs.unlink('./05/test.txt') //удаление файла асинхронно
    .then(() => console.log('File deleted'))
    .catch((err) => console.error(err))
