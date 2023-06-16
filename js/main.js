// Referencing elements of the DOM
const inputSearch = document.querySelector("#search");
const cell = document.getElementsByTagName("td");

// We fetch the data from the API
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

// Data Search
inputSearch.addEventListener('keyup', (e) => {
    let text = e.target.value;

    let re = new RegExp(text, "i");
    for(let i = 0; i < cell.length; i++) {
         let value = cell[i];
         if(re.test(value.innerText)) {
            value.classList.remove("hide");
         } else {
            value.classList.add("hide");
         }
    }
});