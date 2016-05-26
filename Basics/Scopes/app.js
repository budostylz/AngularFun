'use strict'

angular.module('myApp', []);
angular.module('myApp').controller('MainController', ['$scope', function($scope){//$scope binds controller with view(index.html)
    
    $scope.message = 'Hello';

    //set prototype
    $scope.sayHello = function (name) { 
        return $scope.message + ' ' + name;
    };

}]);