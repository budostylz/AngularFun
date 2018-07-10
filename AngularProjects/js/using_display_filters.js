"use strict"

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {

    this.user = {
        firstName: 'Shaun',
        lastName: 'Lewis',
        accountType: 'CHECKING',
        balance: 1349.2
    }

}]);


