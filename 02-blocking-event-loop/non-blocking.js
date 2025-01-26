const fs = require('fs')
let isRunning = true

// Устанавливаем таймаут для изменения флага isRunning
setTimeout(() => (isRunning = false), 1)

// Используем process.nextTick для вывода сообщения
process.nextTick(() => console.log('Next tick is running...'))

// Функция, возвращающая Promise, который разрешается с помощью setImmediate
function setImmediatePromise() {
    return new Promise((resolve) => {
        setImmediate(() => resolve())
    })
}

// Асинхронная функция, выполняющая цикл while до изменения флага isRunning
async function whileLoop() {
    while (isRunning) {
        console.log('While loop is running...')
        await setImmediatePromise()
    }
}

// Запуск функции whileLoop и обработка завершения или ошибки
whileLoop()
    .then(() => console.log('End of script'))
    .catch((err) => console.error(err))
