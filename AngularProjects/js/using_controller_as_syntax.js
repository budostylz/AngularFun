"use strict"

angular.module('myApp', []);

angular.module('myApp').controller('ParentController', [function () {

   this.message = 'Hello from the parent.';

}]);


angular.module('myApp').controller('FirstChild', [function () {

    this.message = 'Hello from the first child.';

}]);


angular.module('myApp').controller('SecondChild', ['$interval','$scope',function ($interval, $scope) {

    this.message = 'Hello from the second child.';
    this.value = 1;

    //set interval
    $interval(function () {
        this.value = Math.round(Math.random() * 10000000) + 1;
    }.bind(this), 2000);

    //set watch
    $scope.$watch('second.value', function (newValue, oldValue) {
        console.log('New: ', newValue, 'Old: ', oldValue);
    });

    

}]);
