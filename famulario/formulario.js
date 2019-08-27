const listElement = document.querySelector('#form ul')       
const inputElement = document.querySelector('#form input')
const buttonElement = document.querySelector('#form button')
        
        var todos = JSON.parse(localStorage.getItem('list_todos')) || []
//{ text: 'Teste1', email: 'jfasdf@gmailc' fone: 'testando'} forma de fazer com lista
function renderBanco(){
    listElement.innerHTML = ''
    for ( todo of todos ) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)
        
        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')

        var linkText = document.createTextNode('Excluir')
        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteBanco('+ pos +')')
        
        linkElement.appendChild(linkText)
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)

    }

}        
renderBanco()

function addBanco(){
    var todoText = inputElement.value
    todos.push(todoText)
    inputElement.value = ''
    renderBanco()
    saveToStorage()
}
buttonElement.onclick = addBanco

function deleteBanco(pos){
    todos.splice(pos, 1)
    renderBanco()
    saveToStorage()
    
}  

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos))
}

  

       
