// API Examples:

// Search by brewery
// `https://api.openbrewerydb.org/breweries/search?query=${brewery}&sort=-name`

// List breweries by city
// `https://api.openbrewerydb.org/breweries?by_city=${city}`

// List breweries by postal code
// `https://api.openbrewerydb.org/breweries?by_postal=${zip}`


//===============================================
// brewData - will fetch data based on user input from the openbrewerydb api and return it as an array of objects.
// ===============================================
const brewData = async (input) => {
  try {
    const url = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${input}`);
    return url.data;
  } catch (error) {
    console.log(`Something is Wrong: ${error}`)
  }
};


// ===============================================
// brewSearch - adds an event listener to the brewery search input and calls brewData with the value that is returned. Text input can be the name of a brewery, a zip code, or a city. Also filters extraneous search results to improve usability, removes previous search results, and creates a map with markers based on the search input provided by the user.
// ===============================================
const brewSearch = () => {
  let searchInput = document.querySelector(`#search-button`);
  searchInput.addEventListener('click', async (event) => {
    event.preventDefault
    const searchText = document.querySelector('#brew-search-input');
    const data = await brewData(searchText.value);

    // Checking if input value is a number, allowing user to search by zip code
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
    // remove previous search results
    brewRemove();
    // populate page with search results
    showBrewInfo(filterData[0]);

    // ---------------- MAP ----------------

    // filter out data results that do not have lat/long coordinates
    if (filterData[0].latitude != null) {
      mapMaker(filterData)
    } else {
      let filterNull = filterData.filter(
        (item) => {
          return item.latitude && item.longitude;
        }
      )
      // displays an error when filtering data results in an empty array
      if (filterNull.length > 0) {
        mapMaker(filterNull);
      } else {
        console.log("No Map Data")
        let clear = document.querySelector('#map');
        clear.innerHTML = '<h4>No mapping data available for this brewery.</h4>';
      }


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
    <h4>Try a Different Search</h4>`
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
// mapMaker - will create a map using the mapbox API and data (long, lat, brewery name) that is passed in from the initial openbrewerydb API call. It will also iterate over each object in the data array and populate the map with additional markers - if there are any.
// ==============================================
mapboxgl.accessToken = 'pk.eyJ1IjoiemFjLW9sZHMiLCJhIjoiY2toZ2tiZzY0MTU0cDJwdDljZzk0YmVpMSJ9.AQbka6mY2EmPAHfwKEjleA'; // Access key

let mapMaker = (data) => {
  let map = new mapboxgl.Map({
    container: 'map',
    // center - long and lat coordinates of the brewery
    center: [data[0].longitude, data[0].latitude],
    zoom: 12,
    style: 'mapbox://styles/mapbox/satellite-streets-v11'
  });
  // Adding text popup and marker styling
  data.forEach(function (brew) {
    let popup = new mapboxgl.Popup({ offset: 25 }).setText(`Welcome to ${brew.name}!`)
    let icon = document.createElement('div')
    icon.id = 'marker';

    let marker = new mapboxgl.Marker(icon)
      .setLngLat([brew.longitude, brew.latitude])
      .setPopup(popup)
      .addTo(map)
  })
}

// This initial call sets map for the Oskar Blues brewery in Longmont, CO when first loading into the page
let oskarBlues = [
  {
    name: 'Oscar Blues Brewery',
    longitude: -105.122735,
    latitude: 40.139209
  }
]
mapMaker(oskarBlues);


//===============================================
// SEARCH SOUND EFFECT - this sets up a crack 'em sound effect when you hit the search button.
//===============================================
const brewSound = document.querySelector('#beer-sound');
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener("click", function () {
  brewSound.play();
});
