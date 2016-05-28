'use strict'

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    this.now = new Date();

    this.user = {
        name: 'Johann Schmidt',
        birthday: 171781200000,
        lastLogin: 1437705300000
    };

   
}]);
