console.log(arguments.callee.toString()) // function (exports, require, module, __filename, __dirname) { console.log(arguments.callee + ''); }

console.log('Bogdan')

console.log(__filename)
console.log(__dirname)
console.log(module)

console.log(require)

console.log(exports)
