"use strict"

angular.module('myApp', []);

angular.module('myApp').factory('$exceptionHandler', function () {

    return function (exception, cause) {
        alert('Oops, an error occured!');
        console.log('Oops an error occured!');
    }

});

angular.module('myApp').controller('MainController', [function () {

    this.throwError = function () {
        throw new Error('This is a sample exception.');
    };

}]);



