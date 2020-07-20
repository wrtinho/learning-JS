function Axios(text) {
    axios.get(`https://api.github.com/users/${text}`) 
    .then(function(response) {
        console.log(response);
    })
     .catch(function(error){
       console.warn(error);
     }) 
    
}

var inputElement = document.querySelector('input[name=user]')

var buttonElement = document.querySelector('button.botao')

buttonElement.onclick=function(){
    var text = inputElement.value;
    
    var listElement = document.createElement('li');
    
    var user= Axios(text)
    console.log("DEU CERTO")
    console.log()

    var textElement = document.createTextNode(text);
    listElement.appendChild(textElement);

    var containerElement = document.querySelector('ul')
    containerElement.appendChild(listElement)

    // var HeaderElement = document.querySelector('.header');
    // containerElement.removeChild(HeaderElement);
}
 