const imgDiv = document.getElementById('img-div');
const sortBtn = document.getElementById('sort-btn');

function getHeroes() {
  const heroID = Math.floor(Math.random() * 731) + 1;
  fetch(`https://superheroapi.com/api/2365677493594220/${heroID}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
getHeroes();
