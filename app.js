// API Examples:

// Search by brewery
// `https://api.openbrewerydb.org/breweries/search?query=${brewery}&sort=-name`

// List breweries by city
// `https://api.openbrewerydb.org/breweries?by_city=${city}`

// List breweries by postal code
// `https://api.openbrewerydb.org/breweries?by_postal=${zip}`


//===============================================
// brewData - will fetch data from the openbrewerydb api and return it as an array of objects.
// ===============================================
const brewData = async (brewery) => {
  try {
    const url = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${brewery}`);
    return url.data;
  } catch (error) {
    console.log(`Something is Wrong: ${error}`)
  }
};

// ===============================================
// brewSearch - adds an event listener to the brewery search input and calls brewData with the value that is returned. Text input can be the name of a brewery, a zip code, or a city. Also removes previous search results.
// ===============================================
const brewSearch = () => {
  let searchInput = document.querySelector(`#search-button`);
  searchInput.addEventListener('click', async (event) => {
    event.preventDefault
    const searchText = document.querySelector('#brew-search-input');
    const data = await brewData(searchText.value);
    
    // Checking if input value is a number
    let filterData;
    if (Number(searchText.value) == searchText.value) {
      filterData = data
    } else { // If input value is not a number, filter out API responses that dont include the input value in the name of the brewery (i.e. street name responses)
      filterData = data.filter(
        (item) => {
          return item.name.toLowerCase().includes(searchText.value.toLowerCase());
        }
      )
    }
    
    console.log("This is filtered", filterData);
    brewRemove();
    showBrewInfo(filterData[0]);
    // ---------------- MAPS ----------------
    console.log(filterData[0].latitude, filterData[0].longitude);
    // filter out data results that do not have lat/long coordinates
    if (filterData[0].latitude != null) {
      mapMaker(filterData[0].longitude, filterData[0].latitude)
    } else {
      let filterNull = filterData.filter(
        (item) => {
          return item.latitude && item.longitude;
        }
      )
      console.log("filterNull: ", filterNull)
      mapMaker(filterNull[0].longitude, filterNull[0].latitude);
    }
  });
}

brewSearch();

// ===============================================
// showBrewInfo - will take data obtained from brewData and append it to the brewery info section of the website. It will also add the link to the brewery if it is available.
// ===============================================
const showBrewInfo = (brewData) => {
  let brewInfo;
  if (!brewData) {
    brewInfo = `
    <h4>Please Check Your Spelling</h4>`
  } else if (brewData.website_url != "") {
    brewInfo = 
    `
    <a href="${brewData.website_url}">${brewData.name}</a>
    <h4>${brewData.city}, ${brewData.state}</h4>
    `;
  } else {
    brewInfo = 
    `
    <h3>${brewData.name}</h3>
    <h4>${brewData.city}, ${brewData.state}</h4>
    `;
  }
  let container = document.querySelector('#brewery-info');
    container.insertAdjacentHTML('beforeend', brewInfo);
}
//===============================================
// brewRemove - will remove the previous search results from the page so that new results can be displayed without stacking up multiple search results.
// ===============================================
const brewRemove = () => {
  let oldBrew = document.querySelector('#brewery-info');
  while (oldBrew.lastChild) {
    oldBrew.removeChild(oldBrew.lastChild)
  }
}

//===============================================
// MAP
// ===============================================

mapboxgl.accessToken = 'pk.eyJ1IjoiemFjLW9sZHMiLCJhIjoiY2toZ2tiZzY0MTU0cDJwdDljZzk0YmVpMSJ9.AQbka6mY2EmPAHfwKEjleA'; // Access key

let mapMaker = (long, lat) => {
  let map = new mapboxgl.Map({
  container: 'map',
  // center: [longitude, latitude]
  center: [long, lat],
  zoom: 12,
  style: 'mapbox://styles/mapbox/navigation-guidance-night-v4'
  });
  let marker = new mapboxgl.Marker()
    .setLngLat([long, lat])
    .addTo(map)
}
// mapMaker(-123.9749, 40.7736);
// let search = new mapboxgl.LngLat(-123.9749, 40.7736)