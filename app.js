console.log("beer");
// API Examples:

// Search by brewery
// `https://api.openbrewerydb.org/breweries/search?query=${brewery}`

// List breweries by city
// `https://api.openbrewerydb.org/breweries?by_city=${city}`

// List breweries by postal code
// `https://api.openbrewerydb.org/breweries?by_postal=${zip}`

const getBrewery = async (brewery) => {
  try {
    const url = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${brewery}`);
    console.log(url.data)
    return url;
  } catch (error) {
    console.alert(`Something is Wrong: ${error}`)
  }
}

getBrewery(`Goose`);