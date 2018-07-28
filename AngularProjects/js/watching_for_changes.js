"use strict"

angular.module('myApp', []);

//set directive, directive will be converted to train-case in Angular
angular.module('myApp').directive('tstThermometer', function () {

    return {
        scope: {
            temperature: '@'
        },
        templateUrl: '../templates/thermometer.html',//html fragment
        link: function (scope, element, attrs) {

            attrs.$observe('temperature', function (newValue) {//watch for changes within object using $observe

                var temp = attrs.temperature;

                if (temp < 45) {

                    element.addClass('freezing');
                    element.removeClass('normal');
                    element.removeClass('hot');

                } else if (temp >= 45 && temp <= 85) {

                    element.removeClass('freezing');
                    element.addClass('normal');
                    element.removeClass('hot');

                } else {

                    element.removeClass('freezing');
                    element.removeClass('normal');
                    element.addClass('hot');

                }
            });
        }
    };

});





angular.module('myApp').controller('MainController', [function () {

    this.currentTemperature = 78;

}]);

