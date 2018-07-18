"use strict"

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {

    this.fullName = 'John Smith';
    this.fullNameConfirm = '';
    this.message = '';

    this.doChange = function () {

        if (this.fullName === this.fullNameConfirm) {
            this.message = 'Thank you for confirming your name.';
        } else {
            this.message = '';
        }
    };

}]);



