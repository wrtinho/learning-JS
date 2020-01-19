// aula 1
function Request(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.github.com/users/wrtinho');
    xhr.send(null);
    
    xhr.onreadystatechange == function() {
        if (xhr.readyState === 4){
            console.log(JSON.parse(xhr.responseText))
        }
    }
}

// aula 2
function Promisses() {
    var minhaPromise = function () {
        return new Promisses(function(resolve,reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET','https://api.github.com/users/wrtinho');
            xhr.send(null);
            
            xhr.onreadystatechange == function() {
                if (xhr.readyState === 4){
                    resolve(JSON.parse(xhr.responseText));
                } else{
                    reject('Erro na requisição');
                }
            }
        })
    }
//  minhaPromise()
 .then(function(response) {
     console.log(response);
 })
  .catch(function(error){
    console.warn(error);
  })  
}

// aula 3
function Axios() {
    axios.get('https://api.github.com/users/wrtinho') 
    .then(function(response) {
        console.log(response);
    })
     .catch(function(error){
       console.warn(error);
     }) 
    
}
// Axios();
