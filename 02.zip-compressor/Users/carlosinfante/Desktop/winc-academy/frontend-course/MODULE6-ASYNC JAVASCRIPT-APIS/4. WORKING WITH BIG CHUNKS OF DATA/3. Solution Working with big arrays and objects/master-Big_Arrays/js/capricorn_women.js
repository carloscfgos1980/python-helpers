const btnCapricornio = document.querySelector('.capricorn_women');



//console.log(randomPersonData[0].birthday.dmy); //Acess to the person(index 0, es decir la primera persona de la lista)
//console.log(randomPersonData[0].birthday.dmy.split("/")[0]); // Acess to the day of birthday of the fist person in the list
//console.log(randomPersonData.birthday.dmy.split("/")[1]); //Acess to the month of birthday of the fist person in the list

const displayCapricornioWomen = () => {

    results.innerHTML = '';

    const woman = randomPersonData.filter((person) => {
        return person.gender === "female"
    })

    //console.log(woman)

    const womanOlder30 = woman.filter((person) => {
        return person.age > 30
    })

    //console.log(womanOlder30);


    const capricornio = womanOlder30.filter((person) => {
        const day = parseInt(person.birthday.dmy.split("/")[0]); // split method to grab the day from this object (birthday: { dmy: "29/08/1987", mdy: "08/29/1987", raw: 557253462 },)
        const month = parseInt(person.birthday.dmy.split("/")[1]); // 1..12
        return month === 1 && day <= 20 || month === 12 && day >= 22
    })

    //console.log(capricornio)

    // function to order alphabetical an element inside the object(ex: name)
    const sorteCapricornio = capricornio.sort((a, b) => {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1;
        if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1;
        return 0;
    });

    //console.log(sorteCapricornio)


    let output = '';

    sorteCapricornio.forEach((person) => {
        output += `
        <li>
            <span>Name: ${person.name}</span>
            <span>Last Name: ${person.surname}</span>         
        </li>
        `;// Something is wrong with the http of the image so I cannot iterate thru the image
        results.innerHTML = output;
    })
}

btnCapricornio.addEventListener("click", displayCapricornioWomen);
