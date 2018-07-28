"use strict"

angular.module('myApp', []);



angular.module('myApp').controller('MainController', ['$scope', function ($scope) {

    $scope.showUser = false;

    $scope.user = {
        name: 'John Smith',
        age: 35,
        isActive: true
    };

    $scope.hobbies = 'snowboarding, biking, cooking';
}]);

