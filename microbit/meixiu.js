var meixiu_icon = new MicroIcon({iconUrl: '/img/meixiu.png'})
var meixiu_colour = '#a83fd8';

var meixiuMicrobit = [{
    popup: "Nicholas posted Mei-Xiu micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: meixiu_icon
    }
}, {
    popup: "Tom received Mei-Xiu.",
    lonLat: [51.2, 0.26],
    options: {
        icon: meixiu_icon
    }
}, {
    popup: "Mart got his mitts on Mei-Xiu.",
    lonLat: [52.51, -2.18],
    options: {
        icon: meixiu_icon
    }
}, {
    popup: "Mart took Mei-Xui to Picademy.",
    lonLat: [52.479439, -1.908457],
    options: {
        icon: meixiu_icon
    }
}];

meixiuMicrobit.forEach(addMarker);
addRoute(meixiuMicrobit, meixiu_colour);
