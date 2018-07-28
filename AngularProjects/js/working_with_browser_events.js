"use strict"

angular.module('myApp', []);

//set directive, directive will be converted to train-case in Angular
angular.module('myApp').directive('tstRollover', function () {

    return {
        scope: {
            label: '@'
        },
        templateUrl: '../templates/test-rollover.html',//html fragment
        replace: true,
        link: function (scope, element, attrs) {
            var originalColor = element.css('background-color');

            element.bind('mouseover', function () {
                element.css('background-color', attrs.activeColor);
            });

            element.bind('mouseout', function () {
                element.css('background-color', originalColor);
            });


        }
    };

});





angular.module('myApp').controller('MainController', [function () {

    this.currentTemperature = 78;

}]);

