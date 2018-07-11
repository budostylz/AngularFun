"use strict"

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {


    this.user = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        zip: ''
    };

    this.submitForm = function (form) {

        if (form.$valid) {
            window.alert('Passed.');
        } else {
            window.alert('Failed.');
        }
    };

}]);


