app.controller("schoolCtrl", function($scope, $firebaseObject) {
  var ref = new Firebase("https://school-d6f30.firebaseio.com/");
  // download the data into a local object
  $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
});
