var map = L.map('map').setView([51.505, -0.09], 13);

var api_key = "pk.eyJ1IjoibnRvbGwiLCJhIjoiY2lnZ3R4Z2dkMHNwN3Zpa3Jyb3dsOTd1OSJ9.ea8lBQyOqbJ-lwjeAhr2WQ";

var tile_layer_url = "https://api.mapbox.com/v4/mapbox.streets/997/256/0/0/0.png?access_token=" + api_key;

L.tileLayer(tile_layer_url, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
}).addTo(map);
