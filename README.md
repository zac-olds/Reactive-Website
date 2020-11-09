# Project Overview

## Project Name

BeerInfo

## Project Description

A simple website that will allow the user to search beer types, find a random beer, and browse brewery locations around the world, based on user preferences.

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

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- Render data on page 
- Allow user to choose favorites 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second API
- Use local storage to save user favorites

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Nov 9| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Nov 11| Project Approval | Incomplete
|Nov 12| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Nov 13| Pseudocode / actual code | Incomplete
|Nov 16| MVP | Incomplete
|Nov 17| Presentations | Incomplete

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day. Students usally put in around 40+ hours into their project 1.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
