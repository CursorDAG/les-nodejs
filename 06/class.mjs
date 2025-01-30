import EventEmitter from 'events'

class Post extends EventEmitter {
    constructor(author, text) {
        super()
        this.author = author
        this.text = text
        this.likes = 0
        this.on('like', (userName) => {
            console.log(`Post liked! by ${userName}. All likes: ${this.likes}`)
        })
        this.on('error', (error) => {
            console.error(error)
        })
    }

    like(userName) {
        if (!userName) {
            this.emit('error', new Error('Not Username is required'))
        }
        this.likes++
        this.emit('like', userName)
    }
}

const myPost = new Post('John Doe', 'Hello, World!')

// })
// console.log(myPost.author)
// console.log(myPost.text)
// console.log(myPost.likes)
myPost.like('alice')

setTimeout(() =>  myPost.like('', 1000))
setTimeout(() => myPost.like('kurt'), 2000)

// console.log(myPost.likes)
