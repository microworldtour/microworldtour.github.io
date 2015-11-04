var mahiri_icon = new MicroIcon({iconUrl: '/img/mahiri.png'})

var mahiriMicrobit = [{
    popup: "Nicholas posted Manhiri micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: mahiri_icon
    }
}];

mahiriMicrobit.forEach(addMarker);
