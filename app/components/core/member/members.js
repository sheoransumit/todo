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
        editMember: function(x,Name){
        	members.splice(x,1,Name);
        },
        deleteMember: function(x){
        	members.splice(x, 1);
        }
    };
});