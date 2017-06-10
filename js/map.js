//place  all map functionality in this file
var map;
var marker;
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.771455, lng: -84.297857},
    zoom: 12,
    styles: style,
    });
  //loop  through model
    for(var i = 0; i < locations.length; i++) {
      var position = locations[i].location;
      var content = locations[i].content;
      var name = locations[i].place;
      var marker = new google.maps.Marker({
        map: map,
        position: position,
        title: name,
        animation: google.maps.Animation.DROP,
      });
      var infowindow = new google.maps.InfoWindow();
      marker.addListener('click', function (){
        populateInfoWindow(this, infowindow);
      });
      //add listener to make markers bounce when clicked
      marker.addListener('click', function(){
        mouseBounce(this);
      });
    }
    // function called in addListener to make markers bounce when clicked
    function mouseBounce(marker) {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE)
      }
    }
  };
  // populateInfoWindow
  function populateInfoWindow(marker, infowindow) {
    //check for already opened windows
    if (infowindow.marker != marker) {
      infowindow.marker = marker;
      infowindow.setContent ('<div>' + marker.title + '</div>');
      infowindow.open(map, marker);
      //clear the window when closed
      infowindow.addListener('closeclick', function(){
        infowindow.marker = null;
      });
    }
  }
