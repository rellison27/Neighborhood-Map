// Initialize observableArray in ViewModel
var myObservable = ko.observableArray(this.locations);

//Define a ViewModel Constructor
var ViewModel = function () {
  var self = this;
  // Initialize observableArray in ViewModel
  //this.myObservable = ko.observableArray(this.locations);

  // Defining an observableArray for the ViewModel
  this.locationItems = ko.observableArray(locations);

  self.query = ko.observable('');

  this.search = ko.computed(function (value) {

    for(var i in this.locationItems) {
      if (self.locationItems[i].place.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        ViewModel.myObservable.push(self.locationItems[i]);
      }
    }
  });
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
