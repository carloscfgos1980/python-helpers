
async function getData() {
    try {
        const res = await fetch(API_URL + API_KEY).then(res => res.json());
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}
getData();