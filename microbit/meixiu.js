var meixiu_icon = new MicroIcon({iconUrl: '/img/meixiu.png'})

var meixiuMicrobit = [{
    popup: "Nicholas posted Mei-Xiu micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: meixiu_icon
    }
}];

meixiuMicrobit.forEach(addMarker);
