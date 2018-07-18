"use strict"

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    this.mouseDownCount = 0;
    this.mouseUpCount = 0;

    this.doMouseDown = function (event) {
        console.log(event);
        this.mouseDownCount++;

    };

    this.doMouseUp = function (event) {
        console.log(event);
        this.mouseUpCount++;
    };

}]);



