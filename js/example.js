// Initialize the maps
var statueMap = L.map('statueMap', {
    center: [39, 25],
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

var museumMap = L.map('museumMap', {
    center: [39, 25],
    zoom: 5,
    maxZoom: 12,
    minZoom: 4,
    scrollWheelZoom: false,
    zoomControl: true,
    maxBounds: [
        [50, 20],
        [25, 0]
    ],
});

// Add OSM base tilelayer to the maps
L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
    maxZoom: 18,
}).addTo(statueMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
    maxZoom: 18,
}).addTo(museumMap);

// Call getData function for each map
getData(statueMap, 'data/statues.geojson', 'img/statue.svg');
getData(museumMap, 'data/museums.geojson', 'img/greek-column.svg');

// function to retrieve the data and place it on the map
function getData(map, url, iconUrl) {
    // load the data, then map
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
                    return L.marker(latlng, { icon: customIcon });
                },
                onEachFeature: onEachFeature
            }).addTo(map);
        })
};

// function to attach popups to each mapped feature
function onEachFeature(feature, layer) {
    var popupContent = "";
    if (feature.properties) {
        // loop to add feature property names and values to html string
        for (var property in feature.properties) {
            if (property != "image"){
                popupContent += "<p>" + property + ": " + feature.properties[property] + "</p>";
            }
            else{
                console.log("hello")
                popupContent += "<img id='test' src='" + feature.properties[property] + "'>";
            }
        }
        layer.bindPopup(popupContent);
    };
};
