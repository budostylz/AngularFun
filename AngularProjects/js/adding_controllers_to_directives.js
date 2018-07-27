"use strict"

angular.module('myApp', []);

//set directive, directive will be converted to train-case in Angular
angular.module('myApp').directive('tstVehicleView', function () {

    return {
        scope: {//create isolate scope for every instance of $scope.item
            //isolate scopes can be reused throughout Angular application
            item: '='
        },
        templateUrl: '../templates/vehicle4.html',//html fragment
        restrict: 'AE',
        controller: function ($scope) {
            $scope.message = '';

            $scope.saveItem = function () {
                if (!$scope.message) {
                    $scope.message = 'Item saved.';
                } else {
                    $scope.message = 'Item saved again.';
                }
            }
        }
    };
});

angular.module('myApp').controller('MainController', ['$scope', function ($scope) {


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



