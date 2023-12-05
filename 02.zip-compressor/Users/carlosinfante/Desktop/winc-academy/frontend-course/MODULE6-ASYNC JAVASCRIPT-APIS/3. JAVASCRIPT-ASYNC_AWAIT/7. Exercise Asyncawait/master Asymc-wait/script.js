
const movieGenres = document.getElementById('movie-genres');
const topMovie = document.getElementById('top-movie');
const topRatedMovie = document.getElementById('top-rated');
const fiveAction = document.getElementById('five-action');
const films1975 = document.getElementById('movie-1975');




async function getMovieGenres() {
    try {
        const res = await fetch(API_URL + API_KEY).then(res => res.json())
        //console.log(res)
        res.genres.forEach((genre) => {

            const movies = document.createElement('li');
            movies.innerHTML = `genre name: ${genre.name} Id: ${genre.id}`;
            movieGenres.appendChild(movies);
        })

    } catch (err) {
        console.log(err)
    }
}
getMovieGenres();

async function getTopMovie() {
    try {
        const selectedMovie = await fetch(MOVIE_PATH + API_KEY).then(res => res.json())
        //console.log(selectedMovie.title)
        const myMovie = document.createElement('p');
        myMovie.innerHTML = selectedMovie.title;
        topMovie.appendChild(myMovie);
    } catch (err) {
        console.log(err)
    }
}
getTopMovie();

async function getTopRatedMovies() {
    try {
        const topMovies = await fetch(MOVIE_TOP_RATED).then(res => res.json())
        //(topMovies.results) I use it to access to the array of objects. (topMovies) is the variable that I create and (results) is the name of the array that I get from de API
        tenTopMovies = topMovies.results.slice(0, 10);// make the array shorter. (0) refers to the index that I start, (10) refers to the amount of objects
        console.log(tenTopMovies);
        //let moviesTop = '';
        tenTopMovies.forEach((movie) => {

            const moviesTop = document.createElement('li');
            moviesTop.innerHTML = movie.title;
            topRatedMovie.appendChild(moviesTop);

            // moviesTop +=
            //     `
            //     <ul>
            //         <li>${movie.title}</li>
            //     </ul>

            //     `;
            // topRatedMovie.innerHTML += moviesTop;
        })

    } catch (err) {
        console.log(err)
    }
}

getTopRatedMovies();

async function getTopActionMovies() {
    try {
        const topAction = await fetch(DISCOVER + API_KEY + POPULAR_ACTION).then(res => res.json())
        //console.log(topAction);
        fiveTopAction = topAction.results.slice(0, 5);
        // console.log(fiveTopAction);
        fiveTopAction.forEach((movie) => {
            const actionMovies = document.createElement('li');
            actionMovies.innerHTML = movie.title;
            fiveAction.appendChild(actionMovies);
        })

    } catch (err) {
        console.log(err)
    }
}

getTopActionMovies();

async function getMovies1975() {
    try {
        const movies75 = await fetch(DISCOVER + API_KEY + YEAR_1975).then(res => res.json())
        console.log(movies75.results);
        movies75.results.forEach((movie) => {
            const selectedYear = document.createElement('li');
            selectedYear.innerHTML = movie.title;
            films1975.appendChild(selectedYear);
        })

    } catch (err) {
        console.log(err)
    }
}

getMovies1975();