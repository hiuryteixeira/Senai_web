let texto = false // declaraçaõ de variavel boolean

console.log(texto)

console.log('Elementos VERDADEIROS: ')
console.log(!!'a') // !! tranforma a variavel em boolean
console.log(!!' ') // !! tranforma a variavel em boolean
console.log(!!3) // !! tranforma a variavel em boolean
console.log(!![]) // !!
console.log(!!{}) // !!

console.log('Elementos FALSO:')
console.log(!!0)
console.log(!!NaN) // note a number
console.log(!!null)
console.log(!!undefined)

//diferença entre Null e underfined 

let teste
console.log(teste)

console.log('testeando ou')
console.log(!! ('' || null || 0 || " ")) // verificar se e verdadeiro se tiver pelo menos um elemento verdadeiro retorna verdadeiro
console.log(!! ('' && null && 0 && " ")) // so retorna verdadeiro se todos forem verdadeiros. mesmo tendo um elemento verdadeiro




