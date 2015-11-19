var monifa_icon = new MicroIcon({iconUrl: '/img/monifa.png'})
var monifa_colour = '#d4391b';

var monifaMicrobit = [{
    popup: "Nicholas posted Monifa micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: monifa_icon
    }
}];

monifaMicrobit.forEach(addMarker);
addRoute(monifaMicrobit, monifa_colour);
