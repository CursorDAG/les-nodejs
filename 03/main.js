const { URL, USERNAME, PASSWORD } = require('./constants')
const getData = require('./utils')

getData('https://jsonplaceholder.typicode.com/posts/1')
    .then((data) => console.log(data))
    .catch((err) => console.error(err))
