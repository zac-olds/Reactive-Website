# Project Overview

## Project Name

beerQuery

## Project Description

A simple website that will allow the user to search a catalog of beers from around the world and get information about the beer (e.g. type, ABV, glassware, brewery, and a description of the beer). Website will load up with information and brewery location of a random beer, and allow the user to choose what they want to do from a drop down menu. Menu items will include beer search, finding brewery locations and random beer.

## API and Data Sample
https://sandbox-api.brewerydb.com/v2/beers/?withBreweries=Y&key=ae3ade67fa77bbf2517926c1875d09f8

```JSON
{
id: "MgdJep",
name: "200th Anniversary Export Stout",
nameDisplay: "200th Anniversary Export Stout",
description: "Toffee caramel with subtle chocolate notes. Complex and very smooth with a balance of roasted malt and sweet chocolate.",
abv: "6",
styleId: 24,
isOrganic: "N",
isRetired: "N",
labels: {
icon: "https://brewerydb-images.s3.amazonaws.com/beer/MgdJep/upload_Z7FPX3-icon.png",
medium: "https://brewerydb-images.s3.amazonaws.com/beer/MgdJep/upload_Z7FPX3-medium.png",
large: "https://brewerydb-images.s3.amazonaws.com/beer/MgdJep/upload_Z7FPX3-large.png",
contentAwareIcon: "https://brewerydb-images.s3.amazonaws.com/beer/MgdJep/upload_Z7FPX3-contentAwareIcon.png",
contentAwareMedium: "https://brewerydb-images.s3.amazonaws.com/beer/MgdJep/upload_Z7FPX3-contentAwareMedium.png",
contentAwareLarge: "https://brewerydb-images.s3.amazonaws.com/beer/MgdJep/upload_Z7FPX3-contentAwareLarge.png"
},
status: "verified",
statusDisplay: "Verified",
createDate: "2017-09-11 16:56:19",
updateDate: "2018-11-02 02:15:14",
style: {
id: 24,
categoryId: 2,
category: {
id: 2,
name: "Irish Origin Ales",
createDate: "2012-03-21 20:06:45"
},
name: "Foreign (Export)-Style Stout",
shortName: "Export Stout",
description: "As with classic dry stouts, foreign-style stouts have an initial malt sweetness and caramel flavor with a distinctive dry-roasted bitterness in the finish. Coffee-like roasted barley and roasted malt aromas are prominent. Some slight acidity is permissible and a medium- to full-bodied mouthfeel is appropriate. Bitterness may be high but the perception is often compromised by malt sweetness. Hop aroma and flavor should not be perceived. The perception of fruity esters is low. Diacetyl (butterscotch) should be negligible or not perceived. Head retention is excellent.",
ibuMin: "30",
ibuMax: "60",
abvMin: "5.7",
abvMax: "9.3",
srmMin: "40",
srmMax: "40",
ogMin: "1.052",
fgMin: "1.008",
fgMax: "1.02",
createDate: "2012-03-21 20:06:45",
updateDate: "2015-04-07 15:23:58"
},
breweries: [
{
id: "HaPdSL",
name: "Guinness",
nameShortDisplay: "Guinness",
description: "St. James's Gate Brewery (Irish: Grúdlann Gheata Shan Séamuis) is a brewery founded in 1759 in Dublin, Ireland by Arthur Guinness. The company is now a part of Diageo, a company formed via the merger of Guinness and Grand Metropolitan in 1997. The main product produced at the brewery is Guinness Draft. Leased for 9,000 years in 1759 by Arthur Guinness at £45 per year, St. James's Gate has been the home of Guinness ever since. It became the largest brewery in Ireland in 1838, and was the largest in the world in 1914, covering 64 acres. Although no longer the largest brewery in the world, it is still the largest brewer of stout in the world. During the 19th and early 20th centuries, the brewery owned most of the buildings in the surrounding area, including many streets of housing for brewery employees, and offices associated with the brewery. The brewery also made all of its own power using its own power plant. There is an attached exhibition on the 250-year-old history of Guinness, called the Guinness Storehouse.",
website: "http://www.guinness.com/",
established: "1759",
isOrganic: "N",
images: {},
status: "verified",
statusDisplay: "Verified",
createDate: "2012-01-03 02:41:56",
updateDate: "2018-11-02 02:15:01",
isMassOwned: "Y",
isInBusiness: "Y",
isVerified: "N",
locations: []
}
]
}
```

## Wireframes

https://wireframe.cc/4RLOJd

### MVP/PostMVP

#### MVP 

- Find endpoints and implement api
- Set up html, css, and javascript files
- Set up async/await function to gather data from API
- Impliment "home page" to display random beer with random beer button
- Set up menu
- Impliment beer search input and button
- Set up the beer info section
- Format with CSS

#### PostMVP  

- Set up map
- Set up ability to handle multiple search results
- Add ability to review beers with notes, etc. and store on a local server
- Add ability to find breweries near the user
- Add a second API with brewery beer menus/lists

## Project Schedule

The below schedule is how I intend to complete my project by the deadline. Some tasks may be subject to change as the project evolves.

|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Nov 10| Project Approval | Complete
|Nov 12| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Nov 13| Pseudocode / actual code | Incomplete
|Nov 16| MVP | Incomplete
|Nov 17| Presentations | Incomplete

## Priority Matrix

https://postimg.cc/1VG5LCfm

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Endpoints and implement api | H | 3hrs| 0hrs | 0hrs |
| HTML, CSS, and JavaScript files | H | 1hrs| 0hrs | 0hrs |
| Async/await function to gather data from API | H | 4hrs| 0hrs | 0hrs |
| Set up map | H | 4hrs| 0hrs | 0hrs |
| Beer search input and button | H | 3hrs| 0hrs | 0hrs |
| Beer info section | H | 4hrs| 0hrs | 0hrs |
| Format with CSS | H | 6hrs| 0hrs | 0hrs |
| Research how to review beers with notes | H | 2hrs| 0hrs | 0hrs |
| Review beers with notes | H | 3hrs| 0hrs | 0hrs |
| Research how to find breweries near the user | H | 2hrs| 0hrs | 0hrs |
| Find breweries near the user | H | 3hrs| 0hrs | 0hrs |
| 2nd API with brewery beer menus/lists | H | 2hrs| 0hrs | 0hrs |
| Research 2nd API with brewery beer menus/lists | H | 3hrs| 0hrs | 0hrs |
| Total | H | 40hrs| 0hrs | 0hrs |

## Code Snippet

This is a place holder for a code snippet that I am particularly proud of.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
- 11/10/2020 - Updated README.md
- 11/10/2020 - Updated MVPS and timeframes
