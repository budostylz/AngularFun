"use strict"

angular.module('myApp', []); //application component

angular.module('myApp').controller('MainController', ['$scope', function ($scope) {

    $scope.message = 'Hello';

    $scope.sayHello = function (name) {
        return $scope.message + ' ' + name + '.';
    };


}]);//controller component