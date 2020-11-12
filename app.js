// API Examples:

// Search by brewery
// `https://api.openbrewerydb.org/breweries/search?query=${brewery}&sort=-name`

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
    // console.log(url.data[0].name);
    // console.log(url.data);
    // showBrewInfo(url.data[0]);
    // showBrewInfo(url.data[1]);
    // showBrewInfo(url.data[2]);
    return url.data;
  } catch (error) {
    console.log(`Something is Wrong: ${error}`)
  }
};

// ======================================================
// brewSearch - adds an event listener to the brewery search input and calls brewData with the value that is returned. Text input can be the name of a brewery, a zip code, or a city. Also removes previous search results.
// ======================================================
const brewSearch = () => {
  let searchInput = document.querySelector(`#search-button`);
  searchInput.addEventListener('click', async(event) => {
    event.preventDefault
    const searchText = document.querySelector('#brew-search-input');
    const data = await brewData(searchText.value);
    const filterData = data.filter(
      (item) => {
        return item.name.toLowerCase().includes(searchText.value.toLowerCase());
        // console.log(item.name)
      }  
    )
    console.log(filterData);
    brewRemove();
    showBrewInfo(filterData[0]);
  })
}

brewSearch();

// ======================================================
// showBrewInfo - will take data obtained from brewData and append it to the brewery info section of the website.
// ======================================================
const showBrewInfo = (brewData) => {
  let brewInfo = 
    `
    <a href="${brewData.website_url}">${brewData.name}</a>
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