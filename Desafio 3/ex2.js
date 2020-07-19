var inputElement = document.querySelector('input[name=user]')

var buttonElement = document.querySelector('button.botao')

buttonElement.onclick=function(){
    var text = inputElement.value;
    
    var listElement = document.createElement('li');
    
    var textElement = document.createTextNode(text);
    listElement.appendChild(textElement);

    var containerElement = document.querySelector('ul')
    containerElement.appendChild(listElement)
}
 