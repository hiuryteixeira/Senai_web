const nome = "Hiury"

const concatenacao = nome + 'Teixeira'
console.log(concatenacao)

const template = '${nome} rocha' // concatenão

console.log(template) // tecnica do template para concatenação

console.log( `10 + 15 = ${10+15}`) // consegue executar o que quiser na frente

const caixa = texto => texto.toUpperCase() // toUpperCase() metodo para o texto ficar masiculo

console.log(` Ola ${caixa( 'fulano' ) }`) // não en
