// API Examples:

// Search by brewery
// `https://api.openbrewerydb.org/breweries/search?query=${brewery}`

// List breweries by city
// `https://api.openbrewerydb.org/breweries?by_city=${city}`

// List breweries by postal code
// `https://api.openbrewerydb.org/breweries?by_postal=${zip}`




// ======================================================
// brewData - will fetch data from the openbrewerydb api and return it as an array of objects.
// ======================================================
const brewData = async (brewery) => {
  try {
    const url = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${brewery}`);
    console.log(url.data[0].name);
    brewRemove();
    showBrewInfo(url.data[0]);
    return url;
  } catch (error) {
    console.log(`Something is Wrong: ${error}`)
  }
};

// ======================================================
// brewSearch - adds an event listener to the brewery search input and calls brewData with the value that is returned. Text input can be the name of a brewery, a zip code, or a city.
// ======================================================
const brewSearch = () => {
  let searchInput = document.querySelector(`#search-button`);
  searchInput.addEventListener('click', (event) => {
    event.preventDefault
    const searchText = document.querySelector('#brew-search-input');
    brewData(searchText.value);
  })
}

brewSearch();

// ======================================================
// showBrewInfo - will take data obtained from brewData and append it to the brewery info section of the website.
// ======================================================
const showBrewInfo = (brewData) => {
  let brewInfo = 
    `
    <h3>${brewData.name}</h3>
    <h4>${brewData.city}, ${brewData.state}</h4>
    `;
  let container = document.querySelector('#brewery-info');
  container.insertAdjacentHTML('beforeend', brewInfo);
}

// ======================================================
// brewRemove - will remove the previous search results from the page so that new results can be displayed without stacking up multiple search results.
// ======================================================
const brewRemove = () => {
  let oldBrew = document.querySelector('#brewery-info');
  while (oldBrew.lastChild) {
    oldBrew.removeChild(oldBrew.lastChild)
  }
}