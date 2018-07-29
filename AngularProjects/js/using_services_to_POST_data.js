"use strict"

//$http services allows AngularJS to communicate with remote servers to transfer data
//you going to need to build a web server or create a web service to get this to work
//go to https://github.com/budostylz/notes/tree/master/07_Version_Control to learn to build a web server

angular.module('myApp', []);

angular.module('myApp').service('AppModel', function ($http) {

    this.users = []; 

    this.addUser = function (user) {

        $http.post('http://localhost:3000/api/public/users', user)
            .then(function (response) {
                this.users.push(response.data);
            }.bind(this),//binds this.states to anonymous function
                function (response) {
                    console.log(response.data);
                });
    }
});

angular.module('myApp').controller('MainController', ['AppModel', function (AppModel) {

    this.model = AppModel;

}]);

