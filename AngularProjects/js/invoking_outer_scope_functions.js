"use strict"

angular.module('myApp', []);

//set directive, directive will be converted to train-case in Angular
angular.module('myApp').directive('tstGenerateNumbers', function () {

    return {
        scope: {//create isolate scope for every instance of $scope.item
            generatorFunction: '&',
            onSave: '&',
            count:'=?'
        },
        templateUrl: '../templates/number-gen.html',
        restrict: 'E',
        controller: function ($scope) {

            if ($scope.generatorFunction) {
                $scope.items = $scope.generatorFunction({ count: $scope.count });
            }

            $scope._onSave = function () {
                if ($scope.onSave) {
                    $scope.onSave();
                }
            };
        }
    };
});

angular.module('myApp').controller('MainController', ['$scope', function ($scope) {


    this.randomNumbers = function (count) {

        var results = [];
        count = count || 10;
        for (var counter = 0; counter < count; counter++) {
            var item = Math.round(Math.random() * 1000) + 1;
            results.push(item);
        }
        return results;
    };

    this.sequentialNumbers = function (count) {

        var results = [];
        count = count || 10;
        for (var counter = 1; counter <= count; counter++) {
            results.push(counter);
        }
        return results;
    };

    this.saveFirst = function () {
        alert('The first item is saved!');
    };

    this.saveSecond = function () {
        alert('The second item is saved!');
    };

}]);



