"use strict"

angular.module('myApp', []);

//set directive, directive will be converted to train-case in Angular
angular.module('myApp').directive('tstAnimalView', function () {

    return {
        scope: {
            item: '='
        },
        templateUrl: '../templates/animal.html',//html fragment
        restrict: 'AE',
        controller: '@', /* controller will be injected */
        name: 'controllerName'
    };
});

angular.module('myApp').controller('MainController', ['$scope', function ($scope) {

    $scope.bird = {
        name:'bird'
    };

    $scope.horse = {
        name: 'horse'
    };

    $scope.snake = {
        name: 'snake'
    };
}]);

//multiple controllers for single directive
angular.module('myApp').controller('BirdController', ['$scope', function ($scope) {
    $scope.state = 'waiting';
    $scope.move = function () {
        $scope.state = 'flying';
    };
}]);

angular.module('myApp').controller('HorseController', ['$scope', function ($scope) {
    $scope.state = 'waiting';
    $scope.move = function () {
        $scope.state = 'galloping';
    };
}]);

angular.module('myApp').controller('SnakeController', ['$scope', function ($scope) {
    $scope.state = 'waiting';
    $scope.move = function () {
        $scope.state = 'slitering';
    };
}]);





