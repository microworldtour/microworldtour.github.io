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
}, {
    popup: "Marja did some painting, gaming and drumming.",
    lonLat: [52.205, 0.119],
    options: {
		icon: marja_icon
    },
},
	{
		popup: "London, Ealing: Working on some games to interest an 8-year old.",
		lonLat: [51.5152,-0.3039],
		options: {
			icon: marja_icon
		}
	}
];

marjaMicrobit.forEach(addMarker);
addRoute(marjaMicrobit, marja_colour);
