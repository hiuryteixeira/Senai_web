// manda pra o cliente depois da informaçõa processada em outros modulos.
const modA = require('./moduloA.js')
const modB = require('./moduloB.js')

console.log(modA.adeus)
console.log(modA.bemVindo)

console.log(modB.boanoite())


