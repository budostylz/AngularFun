"use strict"

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    /*this.style1 = {
        color: 'red',
        fontSize: '16px'

    };

    this.style2 = {
        color: 'blue',
        fontSize: '10px'
    };*/

    this.enableStyles = function () {
        this.style1 = {
            color: 'red',
            fontSize: '16px'

        };

        this.style2 = {
            color: 'blue',
            fontSize: '10px'
        };
    };

    this.disableStyles = function () {
        this.style1 = null;
        this.style2 = null;
    };


}]);



