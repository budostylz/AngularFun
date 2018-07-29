"use strict"

//$http services allows AngularJS to communicate with remote servers to transfer data
//you going to need to build a web server or create a web service to get this to work
//go to https://github.com/budostylz/notes/tree/master/07_Version_Control to learn to build a web server

angular.module('myApp', ['ngResource']);

angular.module('myApp').factory('User', function ($resource) {
    //endpoint gets one id out of complete set or users, desired id is being passed
    return $resource('http://localhost:3000/api/public/users/:id', { id: '@id' }); 
});

angular.module('myApp').controller('MainController', ['User', function (User) {

    var vm = this;
    vm.users = [];
    vm.selectedUser = null;

    this.addUser = function (name) {
        var user = new User({ name: name });
        user.$save(function (newUser, putResponseHeaders) {
            vm.selectedUser = newUser;
        });
    };

    this.getUsers = function () {
        vm.users = User.query(); //query url defined in factory service
    };

    this.getUser = function (id) {
        vm.selectedUser = User.get({ id: id });
    };

    this.deleteUser = function (id) {
        vm.selectedUser = User.delete({ id: id });
    };






}]);

