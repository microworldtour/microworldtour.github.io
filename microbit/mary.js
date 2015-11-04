var mary_icon = new MicroIcon({iconUrl: '/img/mary.png'})

var maryMicrobit = [{
    popup: "Nicholas posted Mary micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: mary_icon
    }
}];

maryMicrobit.forEach(addMarker);
