// API Examples:

// Search by brewery
// `https://api.openbrewerydb.org/breweries/search?query=${brewery}`

// List breweries by city
// `https://api.openbrewerydb.org/breweries?by_city=${city}`

// List breweries by postal code
// `https://api.openbrewerydb.org/breweries?by_postal=${zip}`


// brewData will fetch data from the openbrewerydb api and return it as an array of objects.
const brewData = async (brewery) => {
  try {
    const url = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${brewery}`);
    console.log(url.data)
    return url;
  } catch (error) {
    console.alert(`Something is Wrong: ${error}`)
  }
}

brewData(`Goose`);

// event listener
const brewSearch = () => {
  let searchInput = document.querySelector(`#search-button`);
  searchInput.addEventListener('click', (event) => {
    event.preventDefault
    const searchText = document.querySelector('#brew-search-input');
    console.log(searchText.value);
  })
}

brewSearch();

// add search results


// function to remove previous search results