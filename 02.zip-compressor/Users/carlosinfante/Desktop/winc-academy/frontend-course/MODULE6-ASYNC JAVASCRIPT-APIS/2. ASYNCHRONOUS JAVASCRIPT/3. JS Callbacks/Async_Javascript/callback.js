const posts = [
    { title: 'Post one', body: 'This is a post one' },
    { title: 'Post two', body: 'This is a post two' }
];
//setTimeout es una funcion que se usa para las demorar el request y asi javascript sigue corriendo sin necesidad de que se freeze la pagina mientras obtiene la informacion de un server

/*
// WincAcademy way
function getPosts() {
    setTimeout(() => {
        posts.forEach((post) => {
            console.log(post.title)
            item = document.createElement('li');
            item.innerHTML = post.title;
            document.body.appendChild(item)
        });
    }, 1000);//1000 corresponde a 1000 milseconds o sea 1 segundo
}
*/

// Same result than above
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);//1000 corresponde a 1000 milseconds o sea 1 segundo
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);// create a new array
        callback();// Tnis is very important for the function correctly, otherwise it will not be printed coz it already happened a function before
    }, 2000);
}
/*
getPosts();
//when I call the function like this, it doesnt wait the 2 seconds
*/

// add the function GetPosts as a second argument when we call the function, in this case we dont have to put () after the function
createPost({ title: 'Post three', body: 'This is a post three' }, getPosts);