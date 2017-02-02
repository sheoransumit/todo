angular.module('myApp.members', [])
	.factory('Members', function () {

    var members = [];

    return {
        getMembers: function () {
            return members;
        },
        setMember: function (Name) {
            members.push(Name);
        },
        editMember: function(x){
        	members.splice(x,1);
            // here edit implementation is similar to delete and then add, 
            // hence loss of local variable is to be taken care of or 
            // improve the implementation in here and in tasks.
        },
        deleteMember: function(x){
        	members.splice(x, 1);
        }
    };
});