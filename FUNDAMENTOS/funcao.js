const a = function(c, d){
    
    return c + d;
        
}


console.log(a(5,2)) // passando valores para a constante que passa pra a função.

// outro exemplo

/*let a = 'texto'
    
    a = function(c,d){
        return c + d;
                
} */

console.log(a(5,2))

const soma = (n1, n2)=> {return n1+n2} // fazer uma função e passar paramentros atraves da variavel soma 

console.log(soma(10,2)) // variavel passa os valores e retorna resultado.

const imprimir = teste => console.log(teste)

imprimir('Aula de JS')
// outro modelo de crirar funcao pasando objeto e
var imprimir2 = A => console.log( A)

imprimir2(Objeto={ marca: 'sansung'})

// Operador Ternario

const resultado = nota => nota>=7 ? 'Aprovado' : 'Reprovado' // variavel = função que faz um teste se a nota e maior que 7

console.log(resultado(6))


