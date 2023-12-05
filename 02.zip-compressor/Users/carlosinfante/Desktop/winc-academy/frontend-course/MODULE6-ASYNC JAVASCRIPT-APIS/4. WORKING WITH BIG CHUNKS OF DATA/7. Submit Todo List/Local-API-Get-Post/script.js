

const data = { description: "buy oatmeal", done: false };


async function postData() {
    try {
        const res = await fetch(BASE_URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}
postData();


async function getData() {
    try {
        const web = await fetch(BASE_URL, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(data => console.log(data));
        console.log(web)
    } catch (err) {
        console.log(err)
    }
}
getData();

