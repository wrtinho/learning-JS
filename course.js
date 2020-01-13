var linkElement = document.createElement('a')
linkElement.setAttribute('href','https://github.com/wrtinho')
linkElement.setAttribute('title','Meu perfil no github')

var textElement = document.createTextNode("Acesse meu perfil")

linkElement.appendChild(textElement);
{/* <a href='www.github.com/wrtinho'>acesse meu perfil</a> */}

var containerElement = document.querySelector('#app');
containerElement.appendChild(linkElement);

var inputElement = document.querySelector("#nome")

// containerElement.removeChild(inputElement)

