# mardiGras

## The Challenge

For this challenge we've been asked by the city of New Orleans to write a few apps to help tourists enjoy their time in New Orleans at Mardi Gras. Each level is a different challenge and they do not build on each other this time. Some are games for the tourists while others are tools to help them better use the time they have.

### Creating a Test Case

A Unit Test looks at and tests a specific unit of code to see if it is returning what is expected. No matter the level you choose to work with write a test case before you start your code. Then write just enough code to pass the test. Once you have passing code refactor to pass other test cases.

## Level 2

A huge New Orleans tradition around Mardi Gras and almost every other holiday is lots of parades. Though Mardi Gras is the biggest time for parades. Different Krewes put together floats to travel in their parades. Each one is unique and lots of fun to watch.

We've been tasked by the city of New Orleans with building an application to assist tourists in knowing when and where to attend parades. They should be able to keep track of which parades to attend. The city of New Orleans wants tourists to be able to organize the parades in order of when they occur so that tourists can map out a route to see as many as possible. Tourist should be able to select a location and see when the next parade will be or find all parade locations at a certain time.

| Parade | Location | Date | Start |
| ------ | -------- | ---- | ----- |
| Krewe of Iris | Uptown | 2/10/18 | 10:00am |
| Krewe of Tucks | Uptown | 2/10/18 | 11:00am |
| Krewe of NOMTOC | Westbank | 2/10/18 | 10:45am |
| Krewe of Endymnion | Midtown | 2/10/18 | 4:15pm |
| Krewe of Isis | Metairie | 2/10/18 | 6:30pm |
| Krewe of Okeanos | Uptown | 2/11/18 | 11:00am |
| Krewe of Mid-City | Uptown | 2/11/18 | 11:45am |
| Krewe of Thoth | Uptown | 2/11/18 | 12:00pm |
| Krewe of Bacchus | Uptown | 2/11/18 | 5:15pm |
| Corps de Napoleon | Metairie | 2/11/18 | 5:00pm |
| Krewe of Athena | Metairie | 2/11/18 | 5:30pm |
| Krewe of Pandora | Metairie | 2/11/18 | 6:30pm |
| Krewe of Proteus | Uptown | 2/12/18 | 5:15pm |
| Krewe of Orpheus | Uptown | 2/12/18 | 6:00pm |
| Krewe of Zulu | Uptown| 2/13/18 | 8:00am |
| Krewe of Rex | Uptown| 2/13/18 | 10:00am |
| Krewe of Elks Orleans | Uptown| 2/13/18 | 12:00pm |
| Krewe of Crescent City | Uptown| 2/13/18 | 2:00pm |
| Krewe of Argus | Metairie | 2/13/18 | 10:00am |
| Krewe of Elks Jefferson | Metairie | 2/13/18 | 12:00pm |
| Krewe of Jefferson | Metairie | 2/13/18 | 2:00pm |
| Krewe of Lyra | Covington | 2/13/18 | 10:00am |

These are actual times from http://www.mardigrasneworleans.com/schedule.html

### A Step Further

Going a step furhter add distances and travel times between locations so when a tourist selects a location they are provided a list of the nearest parades going on right now or the time and location of the next parade. Going all out link to something like Google maps for directions to that location.


| Location | Uptown | Midtown | Westbank | Metairie | Covington |
| -------- | ------ | ------- | -------- | -------- | --------- |
| Uptown | | 3.5mi 10min | 8.3mi 20min | 5.2mi 15min | 41.1mi 50min |
| Midtown | 3.5mi 10min | | 11.9mi 25min | 4mi 10min | 39.3mi 45min |
| Westbank | 4.4mi 15min | 11.9mi 25min | | 12.5mi 25min | 49.9mi 60min |
| Metairie | 5.2mi 20min | 4mi 10min | 12.5mi 25min | | 35.5mi 40min |
| Covington | 41.1mi 50min | 39.3mi 45min | 49.9mi 60min | 35.5mi 40min | |

