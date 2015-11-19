var mahiri_icon = new MicroIcon({iconUrl: '/img/mahiri.png'})

var mahiriMicrobit = [{
    popup: "Nicholas posted Mahiri micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: mahiri_icon
    }
}, {
    popup: "Radomir put Mahiri into a robot.",
    lonLat: [47.366667, 8.55],
    options: {
        icon: mahiri_icon
    }
}];

mahiriMicrobit.forEach(addMarker);
