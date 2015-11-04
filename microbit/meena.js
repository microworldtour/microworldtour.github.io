var meena_icon = new MicroIcon({iconUrl: '/img/meena.png'})

var meenaMicrobit = [{
    popup: "Nicholas posted Meena micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: meena_icon
    }
}];

meenaMicrobit.forEach(addMarker);
