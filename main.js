
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

function onLaunch() {

	let domString = "";
	domString += listParadesbyLocation("Covington");
	domString += listParadesbyLocation("Metairie");
	domString += listParadesbyLocation("Midtown");
	domString += listParadesbyLocation("Uptown");
	domString += listParadesbyLocation("Westbank");

	$("#outputContainer").html(domString);
};
onLaunch();



// ******************************************************
// event listeners for dropdown menus
// ******************************************************
$(function(){
      function getLocation(event) {
            let selectedLocation = event.currentTarget.id;
            let domString = listParadesbyLocation(selectedLocation);
            $("#outputContainer").html(domString);
            return false;
      }
      //$('#paradeDropdown').click(yourfunction);
      //$('a.dropdown').click(yourfunction);
      $('#anchorlist > a').click(getLocation);
});


$(function(){
	function getByTimes(event) {
            let selectedTime = event.currentTarget.id;
            let domString = listParadesByTime(selectedTime);
            $("#outputContainer").html(domString);
            return false;
	}
	$('#timeAnchorlist > a').click(getByTimes);
});



// ******************************************************
// function writes the Parades for the selected Location 
// to the DOM
// ******************************************************
function listParadesByTime(thisTime) {

	let domString = "";
	let firstParade = true;

	domString += `<div><h4 id="jQueryH4Header">Parades at ${thisTime}</h4>`;

	for (var key in parades){
		if (parades[key].time === thisTime) 
			if (firstParade || (parades[key].date != dateHasBeenWritten))
			{
				domString += writeDOMSelectedTime(thisTime, parades, key);
				dateHasBeenWritten = parades[key].date;
				firstParade = false;
			}
	}

	return domString;

	//$("#paradeOutputByLocation").html(domString);
};



// ******************************************************
// function writes the Parades for the selected Location 
// to the DOM
// ******************************************************
function listParadesbyLocation(thisLocation) {

	let domString = "";
	let firstParade = true;

	domString += `<div><h4 id="jQueryH4Header">Parades in ${thisLocation}</h4>`;

	for (var key in parades){
		if (parades[key].location === thisLocation) 
			if (firstParade || (parades[key].date != dateHasBeenWritten))
			{
				domString += writeDOMSelectedLocation(thisLocation, parades, key);
				dateHasBeenWritten = parades[key].date;
				firstParade = false;
			}
	}

	return domString;

	//$("#paradeOutputByLocation").html(domString);
};



function writeDOMSelectedLocation (thisLocation, parades, key) {

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



function writeDOMSelectedTime (thisTime, parades, key) {

	let thisDate = parades[key].date;

	let partialString = "";
	partialString += `<table>`;
	partialString += `<thead><tr>`;
	partialString += `<th>${parades[key].date}</th>`;
	partialString += `<th>Parade</th>`;
	partialString += `</tr></thead>`;
	partialString += `<tbody>`;

	for (var key in parades){
		if ( (parades[key].time === thisTime) 
			  && (parades[key].date === thisDate) ) 
		{
			partialString += `<tr>`;
			partialString += `<td>${parades[key].location}</td>`;
			partialString += `<td>${parades[key].parade}</td>`;
			partialString += `</tr>`;
		}
	}
	partialString += `</tbody></table>`;

	return partialString;
};


