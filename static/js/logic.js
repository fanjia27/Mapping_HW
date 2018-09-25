// perform an API call to the earthquake API to getinformation. Call createMarkers when complete
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson", createMarkers);

function createMarkers(response) {

  // pull the "features" property off of response.features
  var features = response.features;

  // initialize an array to hold bike markers
  var earthquakeMarkers = [];

  // loop through the stations array
  for (var index = 0; index < features.length; index++) {
    var geometry = features[index];

    // for each station, create a marker
    var earthquakeMarker = L.marker(geometry.coordinates)
    .bindPopup("<h3>" + features.id + "<h3><h3>Capacity: " + "<h3>");

    // add the marker to the bikeMarkers array
    earthquakeMarkers.push(earthquakeMarker);
  };

};


// Create the map object
var myMap = L.map("map", {
  center: [40.73, -94.0059],
  zoom: 4.2,
});


L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1IjoicGF0dHlqdWxhIiwiYSI6IkVOR3JZSXcifQ.BcWJdvPPN1i3o64-mB5hjg"
}).addTo(myMap);








// function Color(magnitude) {
//     if (magnitude > 5) {
//         return 'red'
//     } else if (magnitude > 4) {
//         return 'darkorange'
//     } else if (magnitude > 3) {
//         return 'tan'
//     } else if (magnitude > 2) {
//         return 'yellow'
//     } else if (magnitude > 1) {
//         return 'darkgreen'
//     } else {
//         return 'lightgreen'
//     }
// }
