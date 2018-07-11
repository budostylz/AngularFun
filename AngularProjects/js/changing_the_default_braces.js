"use strict"

angular.module('myApp', []);

angular.module('myApp').config(function ($interpolateProvider) {

    $interpolateProvider.startSymbol('(~');
    $interpolateProvider.endSymbol('~)');

});

angular.module('myApp').controller('MainController', [function () {

        this.helloMessage = 'Hello from AngularJS';

}]);



