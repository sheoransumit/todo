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

.controller('View1Ctrl', function($scope, $window, Members, Tasks) {
	// $scope.employees = ["ABC", "DEF", "GHI", "JKL"];
	$scope.employees = Members.getMembers();
  $scope.states = ["To be done","Doing", "Done"];
  $scope.task = {title:"", dueon:"", selectedEmployee:"", selectedState:"", description:""};
  $scope.tasks = Tasks.getTasks();
  $scope.domTasks = $scope.tasks;
  //to have a copy for dom is not required once factory is introduced. Remove this afterwards.
  
  $scope.addItem = function() {
    $scope.errortext = "";
    if ($scope.task.title !="" && $scope.task.dueon !="" ) {
      $scope.newtask = angular.copy($scope.task);
		  //Doubt: why do we have to create a copy ?? if pasting directly all values in tasks array reference to one task object.
      // $scope.tasks.push($scope.newtask);
	    Tasks.setTask($scope.newtask);
      $scope.task = {title:"", dueon:"", selectedEmployee:"", selectedState:$scope.states[0], description:""};
    }
    else {
      $window.alert("title and dates are mandatory");
    }
  }
  $scope.editItem = function (x) {
    $scope.task = $scope.tasks[x];
    // $scope.tasks.splice(x, 1);
    Tasks.editTask(x);
  }
  $scope.removeItem = function (x) {
    // $scope.tasks.splice(x, 1);
    Tasks.deleteTask(x);
  }
  $scope.filtered = function (){
    $scope.domTasks = [];
    if($scope.filterState == ""){
      $scope.domTasks = $scope.tasks;
    }
    else {
      for (var i = 0; i < $scope.tasks.length; i++) { 
        if($scope.tasks[i].selectedState == $scope.filterState){
          $scope.domTasks.push($scope.tasks[i]);
        }
      }
    }
  }
  $scope.reset = function (){
    $scope.domTasks = $scope.tasks;
    $scope.filterState = "";
  } 
});