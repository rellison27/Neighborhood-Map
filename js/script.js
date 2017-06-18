// Initialize observableArray in ViewModel
var myObservable = ko.observableArray(this.locations);

//Define a ViewModel Constructor
var ViewModel = function () {
  var self = this;

  // Defining an observableArray for the ViewModel from parent scope
  this.locationItems = ko.observableArray(locations);

  //initializing sifter with empty string to prevent errors this is bound to the input
  this.sifter = ko.observable('');
  //  function
  this.siftItems = ko.computed(function(){
    var sifter = self.sifter().toLowerCase();
    if(!sifter) {
      return self.locationItems();
    } else {
      return ko.utils.arrayFilter(self.locationItems(), function(locationItems) {
        return locationItems.place.toLowerCase().indexOf(sifter);
      })
    }
  }, self);
  // Click function that allows me to click the list and get the bounce animation
  self.clickFunction = function (location){
    google.maps.event.trigger(location.marker,'click');
  };
};
//Activate KO by applying the bindings
ko.applyBindings(new ViewModel());


// instantiate the ViewModel and activate knockout
// -(aka apply the bindings)




// Define obsrevable Array in ViewModel
// Use keyword 'this' to bind the observableArray to ViewModel








//Apply the ko foreach binding to a <ul> elment in the view and iterate
// over the observableArray. Note the binding context
//(aka scope) will play an important role as well
//Also, apply, for example, the ko text binding
//to the <li> element
