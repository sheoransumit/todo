'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

// .controller('View1Ctrl', [function($scope, $window) {
// 	$scope.employees = ["ABC", "DEF", "GHI", "JKL"];
// 	$scope.states = ["To be done","Doing", "Done"];
//     $scope.task = {title:"", dueon:"", selectedEmployee:"", selectedState:"", description:""};
//     $scope.tasks = [];
//     $scope.reset = function() {
//         $scope.newtask = angular.copy($scope.task);
// 		$scope.tasks.push($scope.newtask);
// 	    $scope.task = {title:"", dueon:"", selectedEmployee:"", selectedState:"", description:""};
//     };
// }]);
// Doubt : What is the difference when using array and not using one?
.controller('View1Ctrl', function($scope, $window, Members) {
	// $scope.employees = ["ABC", "DEF", "GHI", "JKL"];
	$scope.employees = Members.getMembers();
  $scope.states = ["To be done","Doing", "Done"];
    $scope.task = {title:"", dueon:"", selectedEmployee:"", selectedState:"", description:""};
    $scope.tasks = [];
    $scope.reset = function() {
      $scope.errortext = "";
      if ($scope.task.title !="" && $scope.task.dueon !="" ) {
        $scope.newtask = angular.copy($scope.task);
  		  $scope.tasks.push($scope.newtask);
  	    $scope.task = {title:"", dueon:"", selectedEmployee:"", selectedState:"", description:""};
      }
      else {
        $scope.errortext = "title and dates are mandatory";
      }
    }
    $scope.editItem = function (x) {
        $scope.task = $scope.tasks[x];
        $scope.tasks.splice(x, 1);
    }
    $scope.removeItem = function (x) {
        $scope.tasks.splice(x, 1);
    } 
});