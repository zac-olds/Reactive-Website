
let brewFilter = (data, search) => {
  let filterData;
  if (Number(search.value) == search.value) {
    filterData = data
  } else { // If input value is not a number, filter out API responses that dont include the input value in the name of the brewery (i.e. street name responses)
    filterData = data.filter(
      (item) => {
        return item.name.toLowerCase().includes(searchText.value.toLowerCase());
      }
    )
  }
}