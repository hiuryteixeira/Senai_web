const escola = "SENAI" // não importa " aspas simples ou dupla


console.log(escola.charAt(4)) // retorna o item na pozição 4 o "A"
console.log(escola.charAt(7))

console.log(escola.charCodeAt(2))
console.log(escola.indexOf('S')) // retorna o indeice que esta procurando
console.log(escola.substring(2)) // retorna a quantidade de carcateres que coloquei 2 no casa mostra "NAI" dali pra frente
console.log(escola.substring(1, 2)) // retorna de um ate o outro no casa retorna o "E"

console.log('Escola'  + escola +  'Serviço Nacional de Ap') //concatena d forma diferente
console.log('Escola' .concat(escola).concat( ' Serviço Nacional de Ap'))

console.log('Segunda,Terça,Quarta'.split(','))//vai mostra so que vai quebra sem de acordo com a virgula pode ser uma letra e outros usado pra quebra string
