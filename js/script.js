// Initialize observableArray in ViewModel
var myObservable = ko.observableArray(this.locations);

//Define a ViewModel Constructor
var ViewModel = function() {
    var self = this;

    // Defining an observableArray for the ViewModel from parent scope
    this.locationItems = ko.observableArray(locations);

    //initializing sifter with empty string to prevent errors this is bound to the input
    this.sifter = ko.observable('');
    //  function
    this.siftItems = ko.computed(function() {
        var sifter = self.sifter().toLowerCase();

        if (!sifter) {
            //loop through markers
            for (var i = 0; i < self.locationItems().length; i++) {
                if (self.locationItems()[i].marker) {
                    self.locationItems()[i].marker.setVisible(true);
                }
            }
            return self.locationItems();
        } else {
            return ko.utils.arrayFilter(self.locationItems(), function(locationItems) {
                var spot = locationItems.place.toLowerCase().indexOf(sifter) !== -1;
                locationItems.marker.setVisible(spot);
                return spot;
            })
        }
    }, self);
    // Click function that allows me to click the list and get the bounce animation
    self.clickFunction = function(location) {
        google.maps.event.trigger(location.marker, 'click');
    };
};
//Activate KO by applying the bindings
ko.applyBindings(new ViewModel());
