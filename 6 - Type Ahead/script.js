const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
    .then(res => res.json())
    .then(data => cities.push(...data))

console.log(cities);

function findPlaces(placesToMatch, cities) {
    return cities.filter(place => {
        //check if the words entered match with any cities or states
        const regex = new RegExp(placesToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex)
    })
}

//find a way to display the result
function displayMatches() {
    const matchArray = findPlaces(this.value, cities);
    const display = matchArray
      .map((place) => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        const stateName = place.state.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${place.population}</span>
        </li>
        `;
      }).join("");
    suggestions.innerHTML = display;
  }

  const searchInput = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");


  searchInput.addEventListener("keyup", displayMatches);
