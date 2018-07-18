"use strict"

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    this.mouseOverCount = 0;
    this.mouseEnterCount = 0;
    this.mouseLeaveCount = 0;

    this.doMouseEnter = function (event) {
        console.log(event);
        this.mouseEnterCount++;
    };

    this.doMouseLeave = function (event) {
        console.log(event);
        this.mouseLeaveCount++;
    };
    this.doMouseOver = function (event) {
        console.log(event);
        this.mouseOverCount++;
    };



}]);



