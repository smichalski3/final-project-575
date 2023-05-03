// Initialize the maps
var statueMap = L.map('statueMap', {
  center: [39, 21],
  zoom: 6,
  maxZoom: 12,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  maxBounds: [
      [50, 50],
      [25, 0]
  ],
});

var romanMap = L.map('romanMap', {
  center: [39, 21],
  zoom: 6,
  maxZoom: 12,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  maxBounds: [
      [50, 50],
      [25, 0]
  ],

});

var venusMap = L.map('venusMap', {
  center: [36.65, 24.3],
  zoom: 10,
  maxZoom: 18,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  maxBounds: [
      [50, 50],
      [25, 0]
  ],

});

var archaicMap = L.map('archaicMap', {
  center: [39, 30],
  zoom: 6,
  maxZoom: 12,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  maxBounds: [
      [50, 50],
      [25, 0]
  ],
});

var classicalMap = L.map('classicalMap', {
  center: [39, 30],
  zoom: 6,
  maxZoom: 12,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  maxBounds: [
      [50, 50],
      [25, 0]
  ],
});

var athensMap = L.map('athensMap', {
  center: [38, 23.8],
  zoom: 12,
  maxZoom: 20,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  maxBounds: [
      [50, 50],
      [25, 0]
  ],
});

var hellenisticMap = L.map('hellenisticMap', {
  center: [39, 30],
  zoom: 6,
  maxZoom: 12,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  maxBounds: [
      [70, 50],
      [25, 0]
  ],
});

var museumMap = L.map('museumMap', {
  center: [45, 15],
  zoom: 5,
  maxZoom: 12,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  
});

var museumStatuesMap = L.map('museumStatuesMap', {
  center: [45, 15],
  zoom: 5,
  maxZoom: 12,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,

});

var movementMap = L.map('movementMap', {
  center: [45, 15],
  zoom: 5,
  maxZoom: 12,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  
});


// Add base tilelayer to the maps
L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 18,
}).addTo(statueMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 18,
}).addTo(romanMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 18,
}).addTo(venusMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 18,
}).addTo(archaicMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 18,
}).addTo(classicalMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 18,
}).addTo(athensMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 18,
}).addTo(hellenisticMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 18,
}).addTo(museumMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 18,
}).addTo(museumStatuesMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 18,
}).addTo(movementMap);

// Call getData function for each map
getData(statueMap, 'data/greek-statues.geojson', 'img/statue.svg');
getData(romanMap, 'data/roman-statues.geojson', 'img/green-statue.svg');
getData(romanMap, 'data/greek-statues.geojson', 'img/statue.svg');
getData(venusMap, 'data/venus.geojson', 'img/statue.svg');
getData(archaicMap, 'data/archaic-statues.geojson', 'img/statue.svg');
getData(classicalMap, 'data/classical-statues.geojson', 'img/statue.svg');
getData(athensMap, 'data/athens-classical.geojson', 'img/statue.svg');
getData(hellenisticMap, 'data/hellenistic-statues.geojson', 'img/statue.svg');
getData(museumMap, 'data/museums.geojson', 'img/greek-column.svg');
getData(museumStatuesMap, 'data/museums.geojson', 'img/greek-column.svg');
getData(museumStatuesMap, 'data/greek-statues.geojson', 'img/statue.svg');
getData(movementMap, 'data/movement-lines.geojson');
getData(movementMap, 'data/greek-statues.geojson', 'img/statue.svg');
getData(movementMap, 'data/museums.geojson', 'img/greek-column.svg',true);

function getData(map, url, iconUrl, highlight) {
  // load the data, then add it to the map
  fetch(url)
      .then(function(response) {
          return response.json();
      })
      .then(function(json) {
          // create a Leaflet GeoJSON layer and add it to the map
          L.geoJson(json, {
              // use filter function to only show names
              filter: function(feature, layer) {
                  return feature.properties;
              },
              // use pointToLayer option to add custom icons
              pointToLayer: function(feature, latlng) {
                  var customIcon = L.icon({
                      iconUrl: iconUrl,
                      iconSize: [40, 40], // size of the icon
                      iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
                  });
                  var marker = L.marker(latlng, { icon: customIcon });
                  return marker;
              },
              style: style,
              onEachFeature: function(feature, layer) {
                var popupContent = "";
                if (feature.properties) {
                    // loop to add feature property names and values to html string
                    for (var property in feature.properties) {
                        if (property != "image"){
                            popupContent += "<p>" + property + ": " + feature.properties[property] + "</p>";
                        }
                        else{
                            popupContent += "<img id='test' src='" + feature.properties[property] + "'>";
                        }
                    }
                // bind the popup to the layer, and show it on click
                layer.bindPopup(popupContent, { closeButton: false, offset: L.point(0, -10) });
                layer.on('click', function(e) {
                    this.openPopup();
                    if (highlight) {
                      map.eachLayer(function(layer){
                        if (layer.feature.properties.Name === feature.properties.name && layer.feature.geometry.type === 'Point') {
                          var customIcon = L.icon({
                              iconUrl: 'img/highlight-statue.svg',
                              iconSize: [40, 40], // size of the icon
                              iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
                          });
                          layer.setIcon(customIcon);
                        }
                      });
                    }
                });
                };
              }
          }).addTo(map);
      })
};



function style(feature) {
  return {
      weight: 2,
      opacity: 1,
      color: '#787878',
      dashArray: '0',
      fillOpacity: 0.7
  };
}



