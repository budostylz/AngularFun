"use strict"

angular.module('myApp', []);

angular.module('myApp').directive('tstHotArea', function () {

    //long form
    /*return {
            link: function (scope, element, attrs) {
                element.bind('mouseover', function () {
                    element.addClass('area-on');
                });

                element.bind('mouseout', function () {
                    element.removeClass('area-on');
                });

            }
        
    };*/

    //short hand form for linking
            return function (scope, element, attrs) {
                element.bind('mouseover', function () {
                    element.addClass('area-on');
                });

                element.bind('mouseout', function () {
                    element.removeClass('area-on');
                });
            }
        


});

angular.module('myApp').controller('MainController', [function () {


}]);



