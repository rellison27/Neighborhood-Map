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
    //function to handle the addListener
    var handleMarkerClick = function() {
        var marker = this;
        populateInfoWindow(this, infowindow)
    }
    var handleMarkerAnimation = function() {
        var marker = this;
        mouseBounce(this);
    }
    //Attempt to make map responsive
    google.maps.event.addDomListener(window, "size", function(){
      var center = map.getCenter();
      google.maps.event.trigger(map, "size");
      map.setCenter(center);
    })
    //create boundaries for the map
    var boundary = new google.maps.LatLngBounds();

    //Iterate through model to create markers
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
        // both info window Constructor and event listener that uses a callback function
        // instead of using an anonymous function inside of the loop
        // function callback to use populateInfoWindow function for instruction
        var infowindow = new google.maps.InfoWindow();
        marker.addListener('click', handleMarkerClick);

        //addListener to make markers bounce when clicked.
        //Passing the callback/handler outside of the loop so we don't have the
        //anonymous function inside of the loop
        marker.addListener('click', handleMarkerAnimation);

        locations[i].marker = marker;
    }
    boundary.extend(marker.position);
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
        alert("Error, failed to load data to application");
    });

}
// function called in addListener to make markers bounce when clicked
function mouseBounce(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function() {
        marker.setAnimation(null);

    }, 2800);

}
