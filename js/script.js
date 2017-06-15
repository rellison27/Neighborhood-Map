//Define a ViewModel Constructor
var ViewModel = function () {
  var self = this;
  self.clickFunction = function (location){
    google.maps.event.trigger(location.marker,'click');
    console.log(location)
  }
}



// instantiate the ViewModel and activate knockout
// -(aka apply the bindings)




// Define obsrevable Array in ViewModel
// Use keyword 'this' to bind the observableArray to ViewModel








//Apply the ko foreach binding to a <ul> elment in the view and iterate
// over the observableArray. Note the binding context
//(aka scope) will play an important role as well
//Also, apply, for example, the ko text binding
//to the <li> element
