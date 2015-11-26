var meena_icon = new MicroIcon({iconUrl: '/img/meena.png'})
var meena_colour = '#2fa6c8';

var meenaMicrobit = [{
    popup: "Nicholas posted Meena micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: meena_icon
    }
 }, {
    popup: "Carol welcomes Meena to sunny San Diego.",
    lonLat: [33.0369867, -117.2919818],
    options: {
        icon: meena_icon
    }
}];

meenaMicrobit.forEach(addMarker);
addRoute(meenaMicrobit, meena_colour);
