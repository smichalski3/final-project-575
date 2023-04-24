var map;

  //function to instantiate the Leaflet map
  function createMap(){
      
      //create the map
      map = L.map('map', {
          center: [39, 25],
          zoom: 6,
         // maxZoom: 6,  // set maxZoom and minZoom to the same value to disable zooming
         // minZoom: 6
      });
  
      //add OSM base tilelayer
      L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
          maxZoom: 18,
      }).addTo(map);
  
      //call getData function
      getData(map);
  };

  //function to retrieve the data and place it on the map
function getData(map){
  //load the data, then map
  fetch("data/made.geojson")
      .then(function(response){
          return response.json();
      })
      .then(function(json){
          //create a Leaflet GeoJSON layer and add it to the map
          L.geoJson(json, {
              //use filter function to only show statue names
              filter: function(feature, layer) {
                  return feature.properties;
              },
              // use pointToLayer option to add custom icons
              pointToLayer: function (feature, latlng) {
                  var customIcon = L.icon({
                      iconUrl: 'img/statue.svg',
                      iconSize: [40, 40], // size of the icon
                      iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
                  });
                  return L.marker(latlng, { icon: customIcon });
              }
          }).addTo(map);
      })
};

  document.addEventListener('DOMContentLoaded',createMap)
