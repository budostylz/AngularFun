'use strict'

angular.module('myApp', []);
angular.module('myApp').controller('MainController', ['$scope', '$interval', function ($scope, $interval) {//$scope binds controller with view(index.html)

    $scope.randomValue = -999; //set property

    $scope.names = ['Wolverine', 'Iron-Man', 'Captain America', 'DeadPool'];

    $scope.qty = 20; $scope.cost = 1.99;

    $scope.pWidth = 100;

    $interval(function () {
        $scope.randomValue = Math.round(Math.random() * 1000000);
    }, 2000);




}]);