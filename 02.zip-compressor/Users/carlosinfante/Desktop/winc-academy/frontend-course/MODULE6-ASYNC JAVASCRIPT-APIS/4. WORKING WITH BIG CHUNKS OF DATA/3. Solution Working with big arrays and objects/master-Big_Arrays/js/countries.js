const btnCountries = document.querySelector('.countries');
const results = document.querySelector('.results');


const displayCountries = () => {

  results.innerHTML = '';

  const countries = randomPersonData.map((item) => {
    return item.region//get all the countries
  })

  const sortedCountries = countries.sort();//alphabetical order

  const singleSortedCountries = (array) => {
    return [...new Set(sortedCountries)];
  }// ver el tutorial de reducir elementos de una array

  singleSortedCountries(sortedCountries).forEach((elem) => {

    const li = document.createElement('li');
    li.innerHTML = elem;
    results.appendChild(li);
  })

}

btnCountries.addEventListener("click", displayCountries);
