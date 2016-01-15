var map = L.map('map').setView([51.505, -0.09], 3);

var api_key = "pk.eyJ1IjoibnRvbGwiLCJhIjoiY2lnZ3R4Z2dkMHNwN3Zpa3Jyb3dsOTd1OSJ9.ea8lBQyOqbJ-lwjeAhr2WQ";

var tile_layer_url = "https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}";

L.tileLayer(tile_layer_url, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    minZoom: 3,
    continuousWorld: false,
    noWrap: true,
    id: "ntoll.ciggtxg9c0snivuknl4epgti3",
    accessToken: api_key
}).addTo(map);

var MicroIcon = L.Icon.extend({
    options: {
        iconSize: [32, 21],
        iconAnchor: [16, 21],
        popupAnchor: [0, -20]
    }
});

var home_icon = new MicroIcon({iconUrl: '/img/home.png'})

function addMarker(element, index, array) {
    if(index===0) {
        L.marker(element.lonLat, {
            icon: home_icon
        }).addTo(map).bindPopup('Nicholas posted all the micro:bits from Towcester.');
    } else {
        L.marker(element.lonLat, element.options).addTo(map).bindPopup(element.popup);
    }
}

function addRoute(journey, colour) {
    var lonlats = [];
    journey.forEach(function (element, index, array) {
        lonlats.push(element.lonLat);
    });
    var arrow = L.polyline(lonlats, {
        weight: 2,
        color: colour
    }).addTo(map);
    var arrowHead = L.polylineDecorator(arrow).addTo(map);
    var arrowOffset = 0;

    var anim = window.setInterval(function() {
        arrowHead.setPatterns([
            {offset: arrowOffset+'%', repeat: 0, symbol: L.Symbol.arrowHead({pixelSize: 8, polygon: false, pathOptions: {stroke: true, color: colour}})}
        ])
        if((arrowOffset+=0.5) > 100)
            arrowOffset = 0;
    }, 50);
}
