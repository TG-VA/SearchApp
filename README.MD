# Search App 🔎

> Desktop version

[![https://i.imgur.com/M3HsVnO.gif](https://i.imgur.com/M3HsVnO.gif "https://i.imgur.com/M3HsVnO.gif")](https://i.imgur.com/M3HsVnO.gif "https://i.imgur.com/M3HsVnO.gif")

> Mobile version

[![https://i.imgur.com/itMo0Rk.gif](https://i.imgur.com/itMo0Rk.gif "https://i.imgur.com/itMo0Rk.gif")](https://i.imgur.com/itMo0Rk.gif "https://i.imgur.com/itMo0Rk.gif")

### 📄 Content
In this project, a Search App is developed using regular expressions; data is consumed from the [{JSON} Placeholder API (Free fake API for testing and prototyping.)](https://jsonplaceholder.typicode.com/ "{JSON} Placeholder API (Free fake API for testing and prototyping.)") using fetch.

The project is developed with HTML, CSS, and Vanilla JavaScript.

This project puts into practice array handling and API consumption.

```javascript
let uri = 'https://jsonplaceholder.typicode.com/users';
fetch(uri)
    .then( response => response.json())
    .then( json => showData(json))
    .catch( e => console.warn(e))

const showData = (data) => {
    let body = '';
    for(let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].name}</td></tr>`
    }

    document.querySelector(".data").innerHTML = body;
}
```
In the previous code, we can observe how the fetch to the API is performed.

<h3 align="left">Languages and Tools</h3>
<p align="left"> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

### ✒️  Author
- [Tristan Venegas](https://github.com/TG-VA "Tristan Venegas") - Front end Developer.

# 

# App de Búsqueda 🔎

> Versión de Escritorio

[![https://i.imgur.com/M3HsVnO.gif](https://i.imgur.com/M3HsVnO.gif "https://i.imgur.com/M3HsVnO.gif")](https://i.imgur.com/M3HsVnO.gif "https://i.imgur.com/M3HsVnO.gif")

> Versión de Móvil

[![https://i.imgur.com/itMo0Rk.gif](https://i.imgur.com/itMo0Rk.gif "https://i.imgur.com/itMo0Rk.gif")](https://i.imgur.com/itMo0Rk.gif "https://i.imgur.com/itMo0Rk.gif")

### 📄 Introducción

En este proyecto se desarrolla una App de Búsqueda utilizando expresiones regulares; se consumen los datos desde la API [{JSON} Placeholder (Free fake API for testing and prototyping.)](https://jsonplaceholder.typicode.com/ "{JSON} Placeholder (Free fake API for testing and prototyping.)"), utilizando fetch.

El proyecto se desarrolla con las tecnologías HTML, CSS y JavaScript Vanilla.

En este proyecto se pone en práctica el manejo de arreglos y el consumo de APIs.

```javascript
let uri = 'https://jsonplaceholder.typicode.com/users';
fetch(uri)
    .then( response => response.json())
    .then( json => showData(json))
    .catch( e => console.warn(e))

const showData = (data) => {
    let body = '';
    for(let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].name}</td></tr>`
    }

    document.querySelector(".data").innerHTML = body;
}
```
En el código anterior podemos observar como se realiza el fetch a la API.

<h3 align="left">Tecnologías y herramientas</h3>
<p align="left"> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

### ✒️  Autor
- [Tristan Venegas](https://github.com/TG-VA "Tristan Venegas") - Front end Developer.