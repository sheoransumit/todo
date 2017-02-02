angular.module('myApp.tasks', [])
	.factory('Tasks', function () {

    var tasksArray = [];

    return {
        getTasks: function () {
            return tasksArray;
        },
        setTask: function (newTask) {
            tasksArray.push(newTask);
        },
        editTask: function(x){
        	tasksArray.splice(x, 1);
        },
        deleteTask: function(x){
        	tasksArray.splice(x, 1);
        }
    };
});