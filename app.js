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
      mapMaker(filterData)
    } else {
      let filterNull = filterData.filter(
        (item) => {
          return item.latitude && item.longitude;
        }
      )
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
// MAP
// ==============================================

mapboxgl.accessToken = 'pk.eyJ1IjoiemFjLW9sZHMiLCJhIjoiY2toZ2tiZzY0MTU0cDJwdDljZzk0YmVpMSJ9.AQbka6mY2EmPAHfwKEjleA'; // Access key

let mapMaker = (data) => {
  console.log("Starting object: ", data)
  // let long = data[0].longitude;
  // let lat = data[0].latitude;
  // let name = data[0].name;
  // console.log("long: ", long);
  // console.log("lat: ", lat);
  // console.log("name: ", name);
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

// function to set up multiple markers on the map


// This initial call sets map for the Oskar Blues brewery in Longmont, CO
let oskarBlues = [
  {
    name: 'Oscar Blues Brewery',
    longitude: -105.122735,
    latitude: 40.139209
  }
]
console.log(oskarBlues)
mapMaker(oskarBlues);

// setMarker(-105.122750, 40.139215, name)

//===============================================
// SOUND EFFECT
//===============================================
const brewSound = document.querySelector('#beer-sound');
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener("click", function () {
  brewSound.play();
});
