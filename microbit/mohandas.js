var mohandas_icon = new MicroIcon({iconUrl: '/img/mohandas.png'})
var mohandas_colour = '#d4b81b';

var mohandasMicrobit = [{
    popup: "Nicholas posted Mohandas micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: mohandas_icon
    }
},{
    popup: "Mark works on Neopixel(Ws2812) library.",
    lonLat: [-36.83, 174.74],
    options: {
        icon: mohandas_icon
    }
},{
    popup: "Nick (a different one) works on the microbit's listening skills.",
    lonLat: [-27.37, 153.01],
    options: {
        icon: mohandas_icon
    }
}
];

mohandasMicrobit.forEach(addMarker);
addRoute(mohandasMicrobit, mohandas_colour);
