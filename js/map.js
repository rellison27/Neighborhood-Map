//place  all map functionality in this file
var map;
var marker;

function initMap() {
    // Constructor creates a new map - only center and zoom are required.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 33.771455,
            lng: -84.297857
        },
        zoom: 11,
        styles: style,
    });
    //loop  through model
    for (var i = 0; i < locations.length; i++) {
        var position = locations[i].location;
        var content = locations[i].content;
        var name = locations[i].place;
        var marker = new google.maps.Marker({
            map: map,
            position: position,
            title: name,
            animation: google.maps.Animation.DROP,
        });
        // both info window Constructor and event listener that uses anonymous
        // function callback to use populateInfoWindow function for instruction
        var infowindow = new google.maps.InfoWindow();
        marker.addListener('click', function() {
            populateInfoWindow(this, infowindow);
        });
        //marker.addListerner('click, populateInfoWindow')

        //add listener to make markers bounce when clicked
        marker.addListener('click', function() {
            mouseBounce(this);
        });
        //marker.addListerner('click, mouseBounce')
        locations[i].marker = marker;
    }
}
// populateInfoWindow
function populateInfoWindow(marker, infowindow) {
    //check for already opened windows
    if (infowindow.marker != marker) {
        infowindow.marker = marker;
        infowindow.setContent('<div>' + marker.title + '</div>');
        infowindow.open(map, marker);
        //clear the window when closed
        infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
        });

    }

    $.ajax({
        url: 'https://api.foursquare.com/v2/venues/search',
        dataType: 'json',
        data: 'limit=1' +
            '&ll=' + marker.position.lat() + ',' + marker.position.lng() +
            '&client_id=' + 'LOIFC5JMOR3YID5U2QOFRZBULTIUDAN2NXXXP3QLHC4UNNQY' +
            '&client_secret=' + 'YLYALZZS1BWYZW0YHCIF4LMFQT2I531HAUBLH242IKWPKKRR' +
            '&v=20140806' +
            '&m=foursquare' +
            '&query=' + marker.title,
        async: true,
    }).done(function(result) {
        console.log(result);

        // open and populate infowindow
        infowindow.setContent('<div>' + marker.title + '</div><p>' + result.response.venues[0].location.address + '</p><p>' + result.response.venues[0].location.postalCode + '</p>');
    }).fail(function(error) {
        console.log(error);
    });

}
// function called in addListener to make markers bounce when clicked
function mouseBounce(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function() {
        marker.setAnimation(null);

    }, 2800);

}
