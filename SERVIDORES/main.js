
const inputext = document.querySelector("#inputext")
const button = document.querySelector("#btn")
const ListUl = document.querySelector(".lista")

button.addEventListener("click", function(){
    const qtde = inputext.value 
    const generator= conte(1, qtde)
                    .map(i => `<li>Item ${i}</li>` )
                    .join('')    
    ListUl.innerHTML = generator

 
})

function conte(inicio,fim){
    let result = []
    for(number = inicio; number <= fim; number++){
        result.push(number)
    } 
    return result 