'use strict'

angular.module('myApp', []);

//Address some prototypical inheritance issues
angular.module('myApp').controller('ParentController', [function () {
    this.message = 'My name is Professor X';

}]);


angular.module('myApp').controller('FirstChild', [function () {

    this.message = 'My name is Storm';

}]);

angular.module('myApp').controller('SecondChild', ['$interval', '$scope', function ($interval, $scope) {

    this.message = 'My name is Rouge';
    this.value = 1;

    $interval(function () {
        this.value = Math.round(Math.random() * 10000000) + 1;
    }.bind(this), 2000);

    $scope.$watch('second.value', function (newValue, oldValue) {
        console.log('New: ', newValue, 'Old: ', oldValue);
    });

}]);





