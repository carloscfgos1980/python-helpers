const API_URL = 'https://jsonplaceholder.typicode.com';

// ALL METHOD
// const xhr = new XMLHttpRequest();

// function onRequestHandler() {
//     if (this.readyState === 4 && this.status === 200) {
//         // 0 = UNSET, no se ha llamado el metodo open.
//         // 1 = OPENED, se ha llamado al metodo open.
//         //2 = HEADERS RECEIVED, se esta llamando el metodo send()
//         //3 = LOADING, se esta cargando, o sea, recibiendo la respuesta
//         // 4 DONE, se ha completado la respuesta.
//         /*
//         console.log(this.response); log a string so we need to be an object, we do that with json parse as follow
//         */
//         const data = JSON.parse(this.response);
//         console.log(data);

//         const HTMLResponse = document.querySelector('#app');
//         const template = data.map(user => `<li>${user.name} 📧 ${user.name}`);
//         HTMLResponse.innerHTML = `<ul>${template}</ul>`

//     }
// }
// xhr.addEventListener('load', onRequestHandler);
// xhr.open("GET", `${API_URL}/users`);
// xhr.send();

const HTMLResponse = document.querySelector('#app');

/*
fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        const template = users.map(user => `<li>${user.name} 📧 ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${template}</ul>`;

    });

*/
//Same as above but easier



const ul = document.createElement('ul');

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            let li = document.createElement('li');
            let elements = document.createTextNode(`${user.name} 📧 ${user.email}`);
            li.appendChild(elements);
            ul.appendChild(li);
        });
        HTMLResponse.appendChild(ul);
    });

