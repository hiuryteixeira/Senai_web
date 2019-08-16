const a = require('lodash')

setInterval(() => console.log(a.random(60, 100)),2000)

// node i -g nodemon
// nodemon moduloExterno.js