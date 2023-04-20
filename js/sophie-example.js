$(document).ready(function () {
// create a map instance
var myMap = L.map('map').setView([51.505, -0.09], 13);

// add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
}).addTo(myMap);

  });
