(function () {
'use strict';


angular.module('myFirstApp',[])
.controller('MyFirstController', function ($scope) {
$scope.name ="Sunny";
$scope.totalValue = 0;
$scope.feedme = function() {
  $scope.alert ="hiiiii";
}

$scope.displayNumeric = function () {
   var totalValue =0;
   totalValue = calculateNow($scope.name);
   $scope.totalValue = totalValue;
};



function calculateNow(string){
  var totalValue=0;
  for(var i =0; i<string.length; i++){
    totalValue += string.charCodeAt(i);
  }
  return totalValue;
}

$scope.sayHello = function () {
  return "Hello, hi";
};
});

function DIcontroller($scope, $filter) {
  $scope.name="scorpion";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  }
}

})();
