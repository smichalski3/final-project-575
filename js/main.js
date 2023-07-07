// Initialize the maps
var blankMap = L.map('blankMap', {
  center: [39, 30],
  zoom: 6,
  maxZoom: 18,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  maxBounds: [
      [50, 50],
      [25, 0]
  ],
});

var blankMap2 = L.map('blankMap2', {
  center: [45, 15],
  zoom: 5,
  maxZoom: 18,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  
});

var statueMap = L.map('statueMap', {
  center: [39, 21],
  zoom: 6,
  maxZoom: 18,
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
  maxZoom: 18,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  maxBounds: [
      [50, 50],
      [25, 0]
  ],

});

var venusMap = L.map('venusMap', {
  center: [36.65, 24.05],
  zoom: 10,
  maxZoom: 20,
  minZoom: 7,
  scrollWheelZoom: false,
  zoomControl: true,
  maxBounds: [
      [45, 35],
      [35, 15]
  ],

});

var archaicMap = L.map('archaicMap', {
  center: [39, 30],
  zoom: 6,
  maxZoom: 18,
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
  maxZoom: 18,
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
  minZoom: 6,
  scrollWheelZoom: false,
  zoomControl: true,
  maxBounds: [
      [50, 50],
      [25, 0]
  ],
});

var transitionMap = L.map('transitionMap', {
  center: [39, 30],
  zoom: 6,
  maxZoom: 18,
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
  maxZoom: 20,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  maxBounds: [
      [70, 50],
      [25, 0]
  ],
});

var venusMuseumMap = L.map('venusMuseumMap', {
  center: [45, 15],
  zoom: 5,
  maxZoom: 20,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  
});

var venusMovementMap = L.map('venusMovementMap', {
  center: [45, 15],
  zoom: 5,
  maxZoom: 20,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  
});

var onlyGreekMap = L.map('onlyGreekMap', {
  center: [45, 15],
  zoom: 5,
  maxZoom: 20,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  
});

var onlyGreekZoomMap = L.map('onlyGreekZoomMap', {
  center: [39, 30],
  zoom: 6,
  maxZoom: 20,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  maxBounds: [
      [50, 50],
      [25, 0]
  ],
});

var britishMuseumMap = L.map('britishMuseumMap', {
  center: [45, 15],
  zoom: 5,
  maxZoom: 20,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  
});

var marblesMap = L.map('marblesMap', {
  center: [45, 15],
  zoom: 5,
  maxZoom: 18,
  minZoom: 4,
  scrollWheelZoom: false,
  zoomControl: true,
  
});

var acropolisMap = L.map('acropolisMap', {
  center: [45, 15],
  zoom: 5,
  maxZoom: 18,
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

var britishMuseumMap2 = L.map('britishMuseumMap2', {
  center: [20, -20],
  zoom: 3,
  maxZoom: 18,
  minZoom: 2,
  scrollWheelZoom: false,
  zoomControl: true,

});

var rosettaMap = L.map('rosettaMap', {
  center: [20, -20],
  zoom: 3,
  maxZoom: 18,
  minZoom: 2,
  scrollWheelZoom: false,
  zoomControl: true,

});

var moaiMap = L.map('moaiMap', {
  center: [20, -20],
  zoom: 3,
  maxZoom: 18,
  minZoom: 2,
  scrollWheelZoom: false,
  zoomControl: true,

});

var finalMap = L.map('finalMap', {
  center: [20, -20],
  zoom: 3,
  maxZoom: 18,
  minZoom: 2,
  scrollWheelZoom: false,
  zoomControl: true,

});


// Add base tilelayer to the maps
L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 18,
}).addTo(blankMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clhgyu8u502h601qmahv00ncm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 18,
}).addTo(blankMap2);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 18,
}).addTo(statueMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 18,
}).addTo(romanMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 20,
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
}).addTo(transitionMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 20,
}).addTo(hellenisticMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clhgyu8u502h601qmahv00ncm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 20,
}).addTo(venusMuseumMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clhgyu8u502h601qmahv00ncm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 20,
}).addTo(venusMovementMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clhgyu8u502h601qmahv00ncm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 20,
}).addTo(onlyGreekMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clhgyu8u502h601qmahv00ncm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 20,
}).addTo(onlyGreekZoomMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clhgyu8u502h601qmahv00ncm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 20,
}).addTo(britishMuseumMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clhgyu8u502h601qmahv00ncm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 18,
}).addTo(marblesMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clhgyu8u502h601qmahv00ncm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 20,
}).addTo(acropolisMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clhgyu8u502h601qmahv00ncm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 20,
}).addTo(museumStatuesMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clhgyu8u502h601qmahv00ncm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 20,
}).addTo(britishMuseumMap2);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clhgyu8u502h601qmahv00ncm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 20,
}).addTo(rosettaMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clhgyu8u502h601qmahv00ncm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 20,
}).addTo(moaiMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clhgyu8u502h601qmahv00ncm/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
  maxZoom: 20,
}).addTo(finalMap);


// Call getData function for each map
getData(statueMap, 'data/archaic-statues.geojson', 'img/archaic-statue.svg');
getData(statueMap, 'data/classical-statues.geojson', 'img/statue.svg');
getData(statueMap, 'data/hellenistic-statues.geojson', 'img/hellenistic-statue.svg');

getData(romanMap, 'data/roman-statues.geojson', 'img/roman-statue.svg');
getData(romanMap, 'data/archaic-statues.geojson', 'img/archaic-statue.svg');
getData(romanMap, 'data/classical-statues.geojson', 'img/statue.svg');
getData(romanMap, 'data/hellenistic-statues.geojson', 'img/hellenistic-statue.svg');

getData(venusMap, 'data/venus.geojson', 'img/hellenistic-statue.svg');

getData(archaicMap, 'data/archaic-statues.geojson', 'img/archaic-statue.svg');

getData(classicalMap, 'data/archaic-statues.geojson', 'img/archaic-statue.svg');
getData(classicalMap, 'data/classical-statues.geojson', 'img/statue.svg');
getData(athensMap, 'data/athens-classical.geojson', 'img/statue.svg');
getData(athensMap, 'data/archaic-statues.geojson', 'img/archaic-statue.svg');

getData(transitionMap, 'data/archaic-statues.geojson', 'img/archaic-statue.svg');
getData(transitionMap, 'data/classical-statues.geojson', 'img/statue.svg');

getData(hellenisticMap, 'data/archaic-statues.geojson', 'img/archaic-statue.svg');
getData(hellenisticMap, 'data/classical-statues.geojson', 'img/statue.svg');
getData(hellenisticMap, 'data/hellenistic-statues.geojson', 'img/hellenistic-statue.svg');

getData(venusMuseumMap, 'data/louvre.geojson', 'img/greek-column.svg');

getData(venusMovementMap, 'data/louvre.geojson', 'img/greek-column.svg');
getData(venusMovementMap, 'data/venus.geojson', 'img/statue.svg');
getData(venusMovementMap, 'data/venus-movement-lines.geojson');

getData(onlyGreekMap, 'data/only-greek-statues.geojson', 'img/statue.svg');

getData(onlyGreekZoomMap, 'data/only-greek-statues.geojson', 'img/statue.svg');

getData(britishMuseumMap, 'data/british-museum.geojson', 'img/greek-column.svg');
getData(britishMuseumMap, 'data/parthenon-movement-lines.geojson');
getData(britishMuseumMap, 'data/parthenon-marbles.geojson', 'img/statue.svg');

getData(marblesMap, 'data/parthenon-marbles.geojson', 'img/statue.svg');

getData(acropolisMap, 'data/acropolis-museum.geojson', 'img/greek-column.svg');

getData(museumStatuesMap, 'data/museums.geojson', 'img/greek-column.svg',true);
getData(museumStatuesMap, 'data/greek-statues.geojson', 'img/statue.svg');

getData(britishMuseumMap2, 'data/british-museum.geojson', 'img/greek-column.svg');

getData(rosettaMap, 'data/rosetta-stone.geojson', 'img/rosetta.svg');
getData(rosettaMap, 'data/british-museum.geojson', 'img/greek-column.svg');

getData(moaiMap, 'data/moai.geojson', 'img/moai.svg');
getData(moaiMap, 'data/rosetta-stone.geojson', 'img/rosetta.svg');
getData(moaiMap, 'data/british-museum.geojson', 'img/greek-column.svg');

getData(finalMap, 'data/british-museum.geojson', 'img/greek-column.svg');
getData(finalMap, 'data/rosetta-stone.geojson', 'img/rosetta.svg');
getData(finalMap, 'data/moai.geojson', 'img/moai.svg');
getData(finalMap, 'data/parthenon-marbles.geojson', 'img/statue.svg');



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
                     var museum = layer.feature.properties["Museum"];
                    this.openPopup();
                    if (highlight) {
                      map.eachLayer(function(layer){
                        if (layer.feature) {
                          if (layer.feature.properties.Artist && layer.feature.geometry.type == "Point"){
                            var statueMuseum = layer.feature.properties["Current Museum"]
                            if (museum == statueMuseum){
                              var customIcon = L.icon({
                                iconUrl: 'img/highlight-statue-light.svg',
                                iconSize: [40, 40], // size of the icon
                                iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
                              });
                              layer.setIcon(customIcon);
                            }
                            else{
                              var customIcon = L.icon({
                                iconUrl: 'img/statue.svg',
                                iconSize: [40, 40], // size of the icon
                                iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
                              });
                              layer.setIcon(customIcon);
                            }
                            
                        }
                          
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
      color: '#d9d9d9',
      dashArray: '0',
      fillOpacity: 0.7
  };
}



