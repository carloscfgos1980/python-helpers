async function getData() {
    let apiUrl = 'https://api.themoviedb.org/3/genre/movie/list';
    try {
        const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=cdb6e4fe4726f8b1dffbdff2eb676e52').then(res => res.json());
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}
getData();