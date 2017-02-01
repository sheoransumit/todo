'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])
.controller('View2Ctrl', function($scope, $window, Members) {
	$scope.members = Members.getMembers();
	$scope.member = "";
	$scope.addMember = function() {
      if ($scope.member !="") {
        Members.setMember($scope.member);
        $scope.member = "";
      }
      else {
      	$window.alert("Enter a members name");
      }
    }
    $scope.editMember = function (x) {
        $scope.member = $scope.members[x];
        $scope.members.splice(x, 1);
    }
    $scope.removeMember = function (x) {
        Members.deleteMember(x);
    }
});
// Doubt : myApp.members was provided to myApp only, how is it accessible from myApp.view2 without giving it as provider and if it is why are we providing ngRoute?
// .controller('View2Ctrl', function($scope, $window) {
// 	$scope.members=[];
// 	$scope.member = "";
// 	$scope.addMember = function() {
//       if ($scope.member !="") {
//         $scope.newmember = angular.copy($scope.member);
//   		$scope.members.push($scope.newmember);
//   	    $scope.member = "";
//       }
//       else {
//       	$window.alert("Enter a members name");
//       }
//     }
// });