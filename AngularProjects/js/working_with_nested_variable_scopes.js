"use strict"

angular.module('myApp', []);

angular.module('myApp').run(function ($rootScope) {

    //Call from Root Scope. Root Scope will be called regardless if information is or is not inside controller.
    $rootScope.userModel = {
        name: 'John Smith',
        age: 33
    };

    $rootScope.sayHello = function () {
        return 'Hello from Angular root scope.';
    };

});


angular.module('myApp').controller('MainController', ['$scope', function ($scope) {

    //Call from Child Scope
    $scope.userModel = {
        name: 'Jane Doe',
        age: 22
    };

    $scope.sayHello = function () {
        return 'Hello from Angular child scope.';
    };

}]);



