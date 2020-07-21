function RederRepo(repositories){
    for (repository of repositories) {
        var listElement = document.createElement('li');
    
    
        var textElement = document.createTextNode(repository.name);
        listElement.appendChild(textElement);
    
        var containerElement = document.querySelector('ul')
        containerElement.appendChild(listElement)
    }

}


function Axios(text) {
    axios.get(`https://api.github.com/users/${text}/repos`) 
    
    .then(function(response) {
        console.log(response);
        RederRepo(response.data)
    })
     .catch(function(error){
       console.warn(error);
     }) 
    
}

var inputElement = document.querySelector('input[name=user]')

var buttonElement = document.querySelector('button.botao')

buttonElement.onclick=function(){
    var text = inputElement.value;
    Axios(text);
}
 