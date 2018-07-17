"use strict"

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    this.clickCount = 0;
    this.doubleClickCount = 0;

    this.doClick = function () {
        this.clickCount = this.clickCount + 1;
    }

    this.doDoubleClick = function () {
        this.doubleClickCount = this.doubleClickCount + 1;
    }




}]);



