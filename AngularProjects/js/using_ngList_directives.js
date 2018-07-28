"use strict"

angular.module('myApp', []);



angular.module('myApp').controller('MainController', [function () {

    this.names = ['David', 'Jill', 'John', 'Laura', 'Michael'];

    this.getType = function (value) {
        return typeof (value);
    }
}]);

