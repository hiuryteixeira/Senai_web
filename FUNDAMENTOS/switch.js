const imprimirResultado = function(nota){    // não permiti tester intervalo e faz uma comparação de caracteres se é igual.
    switch (Math.floor(nota)){ 
        case 10: 
        case 9: 
            console.log('Conceito A')
            break
        case 8: case 7:
            console.log('Conceito B')
            break
        case 6: case 5: case 4:
            console.log('Conceito D')
            break
        default:  
            console.log('Nota Invalida')
        
    }

}
imprimirResultado(10)
imprimirResultado(9.5)

