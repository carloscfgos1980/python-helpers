const posts = [
    { title: 'Post one', body: 'This is a post one' },
    { title: 'Post two', body: 'This is a post two' }
];
//setTimeout es una funcion que se usa para las demorar el request y asi javascript sigue corriendo sin necesidad de que se freeze la pagina mientras obtiene la informacion de un server
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            item = document.createElement('li');
            item.innerHTML = post.title;
            document.body.appendChild(item)
        });
    }, 1000);//1000 corresponde a 1000 milseconds o sea 1 segundo
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
        }, 2000);

        const error = false;//if I (const error = true), nothing happens and I get a message of error in the console

        if (!error) {
            resolve();
        } else {
            reject('Something went wrong');
        }
    });
}
/*
createPost({ title: 'Post three', body: 'This is a post three' })
    .then(getPosts)
    .catch(err => console.log(err));
*/

//All promises
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'Goodbye')
);
const Promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());// With (then) we map it to json and the we get the array in the right format

Promise.all([promise1, promise2, promise3, Promise4]).then(values => console.log(values));//it takes 2 seconds to show the results cos it will take however long is any of the promises