'use strict'
angular.module('myApp', []);



angular.module('myApp').controller('MainController', ['$scope', function ($scope) {

    var vm = this;

    vm.specialName = 'Max Eisenhardt';
    vm.message = '';
    vm.name = 'John Smith';

    $scope.$watch('main.name', function (newValue, oldValue) {

        console.log('new value: ', newValue, ', oldValue: ', oldValue);

        if (newValue == vm.specialName) {
            vm.message = 'Hello! We\'ve been wating for you.';
        } else {
            vm.message = '';
        }

    });

    

}]);
