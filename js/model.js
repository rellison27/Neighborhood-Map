// Locations array with all the data for my markers
var locations = [
    {
    place: 'Iberian Pig',
      location : {
        lat: 33.774657,
        lng: -84.295992,
      },
    },
    {
      place: 'Ponce City Market',
      location: {
        lat: 33.772872,
        lng: -84.366476,
      },
    },
    {
      place: 'The Vortex',
      location: {
        lat: 33.774885,
        lng: -84.348725,
      },
    },
    {
      place: "The Fox Theatre",
      location: {
        lat: 33.774501,
        lng: -84.385718,
      },
    },
    {
      place:'Georgia Aquarium',
      location: {
        lat: 33.765297,
        lng: -84.394902,
      },
    },
  ];
  //this is borrowed code to style my map
  var style = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 33
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2e5d4"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5dac6"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5c6c6"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e4d7c6"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fbfaf7"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#acbcc9"
            }
        ]
    }
]
// Activiates knockout.js
//ko.applyBindings(new locations)
