"use strict"

angular.module('myApp', []);


angular.module('myApp').controller('MainController', ['$scope', '$compile', function ($scope, $compile) {

    //$compile converts string values to DOM elements
    //get element fragment from Notes folder to insert input field markup

    this.addNewField = function (htmlMarkup) {

        var newElement = $compile(htmlMarkup)($scope);
        var parentElement = angular.element('#myDiv');
        parentElement.append(newElement);

    };

}]);



