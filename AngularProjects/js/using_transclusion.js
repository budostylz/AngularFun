"use strict"

angular.module('myApp', []);

//set directive, directive will be converted to train-case in Angular
angular.module('myApp').directive('tstUserView', function () {

    return {
        scope: {
            item: '='
        },
        templateUrl: '../templates/user.html',//html fragment
        restrict: 'AE',
        transclude:true /*Override default directive data*/
    };
});

angular.module('myApp').controller('MainController', [function () {

    this.user = {
        firstName: 'Jane',
        lastName: 'Smith'
    };

    this.helloMessage = 'Hello, from Angular.js.';

}]);

