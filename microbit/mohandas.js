var mohandas_icon = new MicroIcon({iconUrl: '/img/mohandas.png'})

var mohandasMicrobit = [{
    popup: "Nicholas posted Mohandas micro:bit from here.",
    lonLat: [52.133597, -0.990607],
    options: {
        icon: mohandas_icon
    }
}];

mohandasMicrobit.forEach(addMarker);
