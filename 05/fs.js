import fs from 'fs/promises'

fs.readFile('./05/fs.js', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.error(err))