const produto = [ //array de objetos 
    {nome:'Notebook', preco: 3000 , fragil: true},
    {nome:'Ipad Pro', preco: 5000 , fragil: true},
    {nome:'Copo de Vidro', preco: 5 , fragil: true}, // sempres lembrar das virgulas entre as variaveis
    {nome:'Copo de Metal', preco: 7 , fragil: false},
]

console.log(produto.filter(function(p){
    return false
}))// criando um filtro para objetos dentro de um array 

const fragil = produto => produto.fragil // filtra se e verdadeiro ai ja manda 
const caro = produto => produto.preco >= 3000 // filtra se e maior que 3000 

console.log(produto.filter(fragil).filter(caro))



