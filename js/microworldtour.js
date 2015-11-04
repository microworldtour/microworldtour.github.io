var map = L.map('map').setView([51.505, -0.09], 3);

var api_key = "pk.eyJ1IjoibnRvbGwiLCJhIjoiY2lnZ3R4Z2dkMHNwN3Zpa3Jyb3dsOTd1OSJ9.ea8lBQyOqbJ-lwjeAhr2WQ";

var tile_layer_url = "https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}";

L.tileLayer(tile_layer_url, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: "ntoll.ciggtxg9c0snivuknl4epgti3",
    accessToken: api_key
}).addTo(map);

var MicroIcon = L.Icon.extend({
    options: {
        iconSize: [48, 32],
        iconAnchor: [24, 32],
        popupAnchor: [0, -28]
    }
});

function addMarker(element, index, array) {
    L.marker(element.lonLat, element.options).addTo(map).bindPopup(element.popup);
}
