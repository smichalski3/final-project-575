//declare map variable globally so all functions have access
var map;
var dataStats = {};

//function to instantiate the Leaflet map
function createMap() {

    //create the map
    map = L.map('map', {
        center: [0, 0],
        zoom: 2
    });

    //add base tilelayer
    L.tileLayer('https://api.mapbox.com/styles/v1/smichalski/cl9zwm0n1002t14k651t6gs8n/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic21pY2hhbHNraSIsImEiOiJjbDl6d2s0enYwMnI1M29uMDhzNXB0NTRlIn0.c1_vy157AkEEGNIfyQI9YQ', {
        maxZoom: 20,
    }).addTo(map);

    //call getData function
    getData(map);
};

// function to calculate values of data
function calcStats(data) {
    //create empty array to store all data values
    var allValues = [];

    for (var museum of data.features) {
        //loop through each year

        //get name for each museum
        var value = museum.properties["museum" + String(Name)];
        //add value to array
        allValues.push(value);
    }
}
//get min, max, mean stats for our array
dataStats.min = Math.min(...allValues);
dataStats.max = Math.max(...allValues);
//calculate meanValue
console.log(allValues)
var sum = allValues.reduce(function (a, b) {
    return a + b;
});
dataStats.mean = sum / allValues.length;




//calculate the radius of each proportional symbol
function calcPropRadius(attValue) {
    //constant factor adjusts symbol sizes evenly
    var minRadius = 1;
    //Flannery Apperance Compensation formula
    var radius = 1.0083 * Math.pow(attValue / dataStats.min, 0.5715) * minRadius

    return radius;
};



//function to convert markers to circle markers and add popups
function pointToLayer(feature, latlng, attributes) {
    //Determine which attribute to visualize with proportional symbols
    var attribute = attributes[0];

    //create marker options
    var options = {
        fillColor: "#730000",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.9
    };

    //For each feature, determine its value for the selected attribute
    var attValue = Number(feature.properties[attribute]);

    //Give each feature's circle marker a radius based on its attribute value
    options.radius = calcPropRadius(attValue);

    //create circle marker layer
    var layer = L.circleMarker(latlng, options);

    //build popup content string starting with city...Example 2.1 line 24
    var popupContent = "<p><b>Museum:</b> " + feature.properties.Museum + "</p>";

    //add formatted attribute to popup content string
    var year = attribute.split("_")[1];
    popupContent += "<p><b>Name of statue: " + Name + feature.properties[attribute];

    //bind the popup to the circle marker
    layer.bindPopup(popupContent, {
        offset: new L.Point(0, -options.radius)
    });

    //return the circle marker to the L.geoJson pointToLayer option
    return layer;
};

function createPropSymbols(data, attributes) {
    //create a Leaflet GeoJSON layer and add it to the map
    L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return pointToLayer(feature, latlng, attributes);
        }
    }).addTo(map);
};


function getCircleValues(attribute) {
    //start with min at highest possible and max at lowest possible number
    var min = Infinity,
        max = -Infinity;

    map.eachLayer(function (layer) {
        //get the attribute value
        if (layer.feature) {
            var attributeValue = Number(layer.feature.properties[attribute]);

            //test for min
            if (attributeValue < min) {
                min = attributeValue;
            }

            //test for max
            if (attributeValue > max) {
                max = attributeValue;
            }
        }
    });

    //set mean
    var mean = (max + min) / 2;

    //return values as an object
    return {
        max: max,
        mean: mean,
        min: min,
    };
}






function processData(data) {
    //empty array to hold attributes
    var attributes = [];

    //properties of the first feature in the dataset
    var properties = data.features[0].properties;

    //push each attribute name into attributes array
    for (var attribute in properties) {
        //only take attributes with population values
        if (attribute.indexOf("visitor") > -1) {
            attributes.push(attribute);
        };
    };

    return attributes;
};



function getData(map) {
    //load the data
    fetch("data/museums.geojson")
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            var attributes = processData(json);
            calcStats(json);
            //call function to create proportional symbols
            createPropSymbols(json, attributes);
            createSequenceControls(attributes);
            createLegend(attributes);
        })
};

document.addEventListener('DOMContentLoaded', createMap)






















