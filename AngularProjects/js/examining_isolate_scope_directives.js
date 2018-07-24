"use strict"

angular.module('myApp', []);

//set directive, directive will be converted to train-case in Angular
angular.module('myApp').directive('tstVehicleView', function () {

    return {
        scope: {//create isolate scope for every instance of $scope.item
            item:'='
        },
        templateUrl: '../templates/vehicle.html',
        restrict:'EA'
    };
});

angular.module('myApp').controller('MainController', ['$scope', function ($scope) {

    $scope.item = {
        year: 2014,
        make: 'BMW',
        model: '325i',
        price: 28995
    };

    $scope.firstItem = {
        year: 2012,
        make: 'Mazda',
        model: '6',
        price: 18999
    };

    $scope.secondItem = {
        year: 2015,
        make: 'Lexus',
        model: 'IS 250',
        price: 39650
    };


}]);



