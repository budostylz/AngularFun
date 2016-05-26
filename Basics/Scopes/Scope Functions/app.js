'use strict'

angular.module('myApp', []);
angular.module('myApp').controller('MainController', ['$scope', '$interval', function($scope, $interval){//$scope binds controller with view(index.html)
    
    var items = ['bananas', 'apples', 'pears', 'cherries', 'peaches'];

    $scope.itemIndex = null;
    $scope.currentItem = '';

    $scope.getItem = function () {
        $scope.currentItem = items[$scope.itemIndex];
    };

    
    $interval(function () {
        $scope.itemIndex = Math.round(Math.random() * (items.length - 1));
        $scope.getItem();

    }, 2000);

    


}]);