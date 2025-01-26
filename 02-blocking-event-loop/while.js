let isRunning = true

setTimeout(() => (isRunning = false), 10)
process.nextTick(() => console.log('Next tick is running...'))

while (isRunning) console.log('While loop is running...')
