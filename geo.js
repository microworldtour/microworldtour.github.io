var MicroIcon = L.Icon.extend({
    options: {
        iconSize: [48, 32],
        iconAnchor: [24, 32],
        popupAnchor: [0, -28]
    }
});


var mary_icon = new MicroIcon({iconUrl: 'mary.png'})
var meena_icon = new MicroIcon({iconUrl: 'meena.png'})
var mandela_icon = new MicroIcon({iconUrl: 'mandela.png'})
var meixiu_icon = new MicroIcon({iconUrl: 'meixiu.png'})
var mohandas_icon = new MicroIcon({iconUrl: 'mohandas.png'})


function addMarker(element, index, array) {
    L.marker(element.lonLat, element.options).addTo(map).bindPopup(element.popup);
}


var maryMicrobit = [{
    popup: "Nicholas posted Mary micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: mary_icon
    }
}];

var meenaMicrobit = [{
    popup: "Nicholas posted Meena micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: meena_icon
    }
}];

var mandelaMicrobit = [{
    popup: "Nicholas posted Mandela micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: mandela_icon
    }
}];

var meixiuMicrobit = [{
    popup: "Nicholas posted Mei-Xiu micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: meixiu_icon
    }
}];

var mohandasMicrobit = [{
    popup: "Nicholas posted Mohandas micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: mohandas_icon
    }
}];

maryMicrobit.forEach(addMarker);
meenaMicrobit.forEach(addMarker);
mandelaMicrobit.forEach(addMarker);
meixiuMicrobit.forEach(addMarker);
mohandasMicrobit.forEach(addMarker);
