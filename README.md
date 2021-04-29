# Project Overview

## Project Name

brewQuery

## Project Description

A simple website that will display basic brewery info, and a map. The user can search a database of breweries in the United States and bring up a map and a link to the breweries website (if available). The search feature will allow the user to search breweries using a zip code, brewery name, or city/state. Website will initially load with information and brewery location of one of my favorite breweries in Longmont, CO.

Deployed Link: https://zac-olds.github.io/brewQuery/

## API and Data Sample
https://api.openbrewerydb.org/breweries/search?query=avery

```JSON

{
id: 1217,
name: "Avery Brewing Co",
brewery_type: "regional",
street: "4910 Nautilus Ct N",
address_2: null,
address_3: null,
city: "Boulder",
state: "Colorado",
county_province: null,
postal_code: "80301-3242",
country: "United States",
longitude: "-105.204765186937",
latitude: "40.0625835",
phone: "",
website_url: "",
updated_at: "2018-08-24T00:05:32.893Z",
created_at: "2018-07-24T01:33:03.576Z"
},
```

## Wireframes

https://wireframe.cc/4RLOJd

### MVP/PostMVP

#### MVP 

- Find endpoints and implement api
- Set up html, css, and javascript files
- Set up async/await function to gather data from API
- Impliment "home page" to display my favorite brewery
- Impliment brewery search input and button
- Set up ability to handle multiple search results
- Set up the brewery info section
- Format with CSS

#### PostMVP  


- Set up sound for search button
- Set up map
- Add ability to find breweries near the user
- Set up menu
- Add a second API with searchable beer database
- Add random beer functionality
- Add ability to search beers


## Project Schedule

The below schedule is how I intend to complete my project by the deadline. Some tasks may be subject to change as the project evolves.

|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Nov 10| Project Approval | Complete
|Nov 12| Core Application Structure (HTML, CSS, etc.) | Complete
|Nov 13| Pseudocode / actual code | Complete
|Nov 16| MVP | Complete
|Nov 17| Presentations | Incomplete

## Priority Matrix

https://postimg.cc/1VG5LCfm

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Endpoints and implement api | H | 3hrs| 3hrs | 3hrs |
| HTML, CSS, and JavaScript files | H | 1hrs| 1hrs | 1hrs |
| Async/await function to gather data from API | H | 4hrs| 2hrs | 2hrs |
| Display favorite brewery on home page at load | H | 3hrs | 1.5hrs | 1.5hrs |
| Beer search input and button | H | 3hrs| 3hrs | 3hrs |
| Set up ability to handle multiple search results | H | 1hrs | 1hrs | 1hrs |
| Beer info section | H | 4hrs| 4hrs | 4hrs |
| Format with CSS | H | 6hrs| 8hrs | 8hrs |
| Research how to set up a menu | H | 2hrs| 0hrs | 0hrs |
| Set up menu | H | 3hrs| 0hrs | 0hrs |
| Research how to add a map | H | 2hrs| 2hrs | 2hrs |
| Set up map | H | 4hrs| 4hrs | 4hrs |
| Show breweries near the user on map | H | 3hrs| 3hrs | 3hrs |
| Set up second API | H | 2hrs| 2hrs | 2hrs |
| Add random beer functionality | H | 3hrs| 0hrs | 0hrs |
| Add ability to search beers | H | 2hrs| 0hrs | 0hrs |
| Total | H | 47hrs| 34.5hrs | 34.5hrs |

## Code Snippet

This is a forEach loop that adds markers to the map for each brewery that is present in the object array that is returned from the user's search. It is a simple solution for showing any breweries that might be near the user when they search using a zip code.

```
data.forEach(function (brew) {
    let popup = new mapboxgl.Popup({ offset: 25 }).setText(`Welcome to ${brew.name}!`)
    let icon = document.createElement('div')
    icon.id = 'marker';
  
    let marker = new mapboxgl.Marker(icon)
      .setLngLat([brew.longitude, brew.latitude])
      .setPopup(popup)
      .addTo(map)
  })
```

## Change Log
- 11/10/2020 - Updated README.md
- 11/10/2020 - Updated MVPS and timeframes
- 11/10/2020 - Switched APIs, mixed up MVPs and modified my website goal
- 11/12/2020 - Updated timeframes
- 11/16/2020 - Updated timeframes, added Post MVP four sound
- 11/16/2020 - Added code snippet
- 11/17/2020 - Updated project description, time frames, and code snippet description
