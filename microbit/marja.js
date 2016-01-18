var marja_icon = new MicroIcon({iconUrl: '/img/marja.png'})
var marja_colour = '#263dde';

var marjaMicrobit = [{
    popup: "Nicholas posted Marja micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: marja_icon
    }
}, {
    popup: "Marja spent some time in Sheffield with Päivi and learned to be a music player.",
    lonLat: [53.381129, -1.470085],
    options: {
        icon: marja_icon
    }
}];

marjaMicrobit.forEach(addMarker);
addRoute(marjaMicrobit, marja_colour);