var listElemente = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = [
    'Fazer café',
     'Estudar JavaScript',
     'Dormir'
];
function renderTodos() {
    listElemente.innerHTML='';
    for (todo of todos){
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement("a");
        var linktext = document.createTextNode("Excluir");

        

        

        todoElement.appendChild(todoText);
        linkElement.appendChild(linktext);
        listElemente.appendChild(todoElement);
        

    }
    
}
renderTodos();
function addTodo() {
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();    
}

buttonElement.onclick= addTodo;