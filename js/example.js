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

var romanMap = L.map('romanMap', {
    center: [39, 25],
    zoom: 5,
    maxZoom: 12,
    minZoom: 4,
    scrollWheelZoom: false,
    zoomControl: true,

});

var movementMap = L.map('movementMap', {
    center: [39, 25],
    zoom: 5,
    maxZoom: 23,
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
}).addTo(museumMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
    maxZoom: 18,
}).addTo(romanMap);

L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/clgpx6cap00e901nn9jbi9fyt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
    maxZoom: 23,
}).addTo(movementMap);

// Call getData function for each map
getData(statueMap, 'data/statues.geojson', 'img/statue.svg');
getData(museumMap, 'data/museums.geojson', 'img/greek-column.svg');
getData(romanMap, 'data/romans.geojson', 'img/roman-statue.svg');
getData(movementMap, 'data/movement-lines.geojson');
getData(movementMap, 'data/statues.geojson', 'img/statue.svg');
getData(movementMap, 'data/museums.geojson', 'img/greek-column.svg');


function getData(map, url, iconUrl) {
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
                    marker.on('mouseover', function() {
                        var popup = L.popup()
                            .setLatLng(latlng)
                            .setContent(feature.properties.name) // change this to customize the popup content
                            .openOn(map);
                    });
                    return marker;
                },
                style: style,
                onEachFeature: onEachFeature
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
                popupContent += "<img id='test' src='" + feature.properties[property] + "'>";
            }
        }
    // bind the popup to the layer, and show it on hover
    layer.bindPopup(popupContent, { closeButton: false, offset: L.point(0, -10) });
    layer.on('mouseover', function(e) {
        this.openPopup();
    });
    layer.on('mouseout', function(e) {
        this.closePopup();
    });
    };
};
