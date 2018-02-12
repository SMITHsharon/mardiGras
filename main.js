
var parades = [
  {
    parade: "Krewe of Iris",
    location: "Uptown",
    date: "2/10/18",
    time:   "10:00am"
  },
  {
    parade: "Krewe of Tucks",
    location: "Uptown",
    date: "2/10/18",
    time:   "11:00am"
  },
  {
    parade: "Krewe of NOMTOC",
    location: "Westbank",
    date: "2/10/18",
    time:   "10:45am"
  },
  {
    parade: "Krewe of Endymnion",
    location: "Midtown",
    date: "2/10/18",
    time:   "4:15pm"
  },
  {
    parade: "Krewe of Isis",
    location: "Metairie",
    date: "2/10/18",
    time:   "6:30pm"
  },
  {
    parade: "Krewe of Okeanos",
    location: "Uptown",
    date: "2/11/18",
    time:   "11:00am"
  },
  {
    parade: "Krewe of Mid",
    location: "Uptown",
    date: "2/11/18",
    time:   "11:45am"
  },
  {
    parade: "Krewe of Thoth",
    location: "Uptown",
    date: "2/11/18",
    time:   "12:00pm"
  },
  {
    parade: "Krewe of Bacchus",
    location: "Uptown",
    date: "2/11/18",
    time:   "5:15pm"
  },
  {
    parade: "Corps de Napoleon",
    location: "Metairie",
    date: "2/11/18",
    time:   "5:00pm"
  },
  {
    parade: "Krewe of Athena",
    location: "Metairie",
    date: "2/11/18",
    time:   "5:30pm"
  },
  {
    parade: "Krewe of Pandora",
    location: "Metairie",
    date: "2/11/18",
    time:   "6:30pm"
  },
  {
    parade: "Krewe of Proteus",
    location: "Uptown",
    date: "2/12/18",
    time:   "5:15pm"
  },
  {
    parade: "Krewe of Orpheus",
    location: "Uptown",
    date: "2/12/18",
    time:   "6:00pm"
  },
  {
    parade: "Krewe of Zulu",
    location: "Uptown",
    date: "2/13/18",
    time:   "8:00am"
  },
  {
    parade: "Krewe of Rex",
    location: "Uptown",
    date: "2/13/18",
    time:   "10:00am"
  },
  {
    parade: "Krewe of Elks",
    location: "Uptown",
    date: "2/13/18",
    time:   "12:00pm"
  },
  {
    parade: "Krewe of Crescent",
    location: "Uptown",
    date: "2/13/18",
    time:   "2:00pm"
  },
  {
    parade: "Krewe of Argus",
    location: "Metairie",
    date: "2/13/18",
    time:   "10:00am"
  },
  {
    parade: "Krewe of Elks",
    location: "Metairie",
    date: "2/13/18",
    time:   "12:00pm"
  },
  {
    parade: "Krewe of Jefferson",
    location: "Metairie",
    date: "2/13/18",
    time:   "2:00pm"
  },
  {
    parade: "Krewe of Lyra",
    location: "Covington",
    date: "2/13/18",
    time:   "10:00am"
  }
];

$(function(){
      function getLocation(event) {
            let selectedLocation = event.currentTarget.id;
            listParadesbyLocation(selectedLocation);
            return false;
      }
      //$('#paradeDropdown').click(yourfunction);
      //$('a.dropdown').click(yourfunction);
      $('#anchorlist > a').click(getLocation);
});


$(function(){
	function getByTimes(event) {
            //alert('some anchor clicked');
            console.log("event :: ", event);
            console.log("event.currentTarget :: ", event.currentTarget);
            console.log("event.currentTarget.id :: ", event.currentTarget.id);
            let selectedTime = event.currentTarget.id;
            console.log("selectedTime :: ", selectedTime);
            listParadesByTime(selectedTime);
            return false;
	}
	$('#timeAnchorlist > a').click(getByTimes);
});


// ******************************************************
// function writes the Parades for the selected Location 
// to the DOM
// ******************************************************
function listParadesByTime(thisTime) {

	console.log("listing parades for ", thisTime);
};

// ******************************************************
// function writes the Parades for the selected Location 
// to the DOM
// ******************************************************
function listParadesbyLocation(thisLocation) {

	console.log("listing parades for ", thisLocation);
	console.log("parades :: ", parades);
	console.log("thisLocation :: ", thisLocation);

	let domString = "";
	let firstParade = true;

	domString += `<div><h2 id="jQueryH2Header">Parades in ${thisLocation}</h2>`;

	for (var key in parades){
		if (parades[key].location === thisLocation) 
			if (firstParade || (parades[key].date != dateHasBeenWritten))
			{
				domString += writeDOM(thisLocation, parades, key);
				dateHasBeenWritten = parades[key].date;
				firstParade = false;
			}
	}

	$("#paradeOutputByLocation").html(domString);
};

function writeDOM (thisLocation, parades, key) {

	let thisDate = parades[key].date;

	let partialString = "";
	partialString += `<table>`;
	partialString += `<thead><tr>`;
	partialString += `<th>${parades[key].date}</th>`;
	partialString += `<th>Time</th>`;
	partialString += `</tr></thead>`;
	partialString += `<tbody>`;

	for (var key in parades){
		if ( (parades[key].location === thisLocation) 
			  && (parades[key].date === thisDate) ) 
		{
			partialString += `<tr>`;
			partialString += `<td>${parades[key].parade}</td>`;
			partialString += `<td>${parades[key].time}</td>`;
			partialString += `</tr>`;
		}
	}
	partialString += `</tbody></table>`;

	return partialString;
};


