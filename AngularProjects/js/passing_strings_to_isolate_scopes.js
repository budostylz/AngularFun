"use strict"

angular.module('myApp', []);

//set directive, directive will be converted to train-case in Angular
angular.module('myApp').directive('tstVehicleView', function () {

    return {
        scope: {
            year: '@',
            make: '@',
            model: '@',
            info:'@'
        },
        templateUrl: '../templates/vehicle3.html',
        restrict: 'AE',
        controller: function ($scope) {
            console.log('typeof(year): ', typeof ($scope.year));
            console.log('typeof(make): ', typeof ($scope.make));
            console.log('typeof(model): ', typeof ($scope.model));
            console.log('typeof(info): ', typeof ($scope.info));

        }
    };
});

angular.module('myApp').controller('MainController', [function () {

    this.firstItemInfo = {
        horsePower: 255,
        gasoline: 'unleaded',
        doors: 4,
        price: 19999
    };

    this.secondItemInfo = {
        horsePower: 255,
        gasoline: 'unleaded',
        doors: 4,
        price: 24349

    };

}]);



