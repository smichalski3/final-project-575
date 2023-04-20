var map;

//function to instantiate the Leaflet map
function createMap(){
    
    //create the map
    map = L.map('map', {
        center: [0, 0],
        zoom: 1
    });

    //add OSM base tilelayer
    L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/cl9zwm0n1002t14k651t6gs8n/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
        maxZoom: 10,
    }).addTo(map);

    //call getData function
    getData(map);
};

//function to retrieve the data and place it on the map
function getData(map){
    //load the data, then map
    fetch("data/meuseums.geojson")
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            //create a Leaflet GeoJSON layer and add it to the map
            L.geoJson(json, {
                //use filter function to only show cities with 2015 populations greater than 20 million
                filter: function(feature, layer) {
                    return feature.properties;
                }
            }).addTo(map);
        })
};

document.addEventListener('DOMContentLoaded',createMap)