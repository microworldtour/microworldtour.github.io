var mary_icon = new MicroIcon({iconUrl: '/img/mary.png'})
var mary_colour = '#5db24a';

var maryMicrobit = [
    {
        popup: "Nicholas posted Mary micro:bit from here.",
        lonLat: [52.133597, -0.990607],
        options: {
            icon: mary_icon
    },
    }
        {
        popup: "Mary landed at Chicago, O'Hare airport.",
        lonLat: [41.9825027, -87.8542467],
        options: {
            icon: mary_icon
        }
    },
    {
        popup: "Mary inexplicably made a side trip to Washington, DC Dulles Airport.",
        lonLat: [38.9531204, -77.4587328],
        options: {
            icon: mary_icon
        }
    },
    {
        popup: "Mary returned to Chicago and was finally delivered to Naomi.",
        lonLat: [41.8771212, -87.6524593],
        options: {
            icon: mary_icon
        }
    }
];

maryMicrobit.forEach(addMarker);
addRoute(maryMicrobit, mary_colour);
