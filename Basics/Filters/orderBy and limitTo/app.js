'use strict'

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {
  
    this.users = [
        {
            firstName: 'Tony',
            lastName: 'Starks',
            accountType: 'Checking',
            balance: 1349.2,
            birthday: 19702905
        },
        {
            firstName: 'Peter',
            lastName: 'Parker',
            accountType: 'Checking',
            balance: 1245.33,
            birthday: 19640101
        },
        {
            firstName: 'Jean',
            lastName: 'Gray',
            accountType: 'Checking',
            balance: 4788.89,
            birthday: 19630101
        },
        {
            firstName: 'Felicia',
            lastName: 'Hardy',
            accountType: 'Checking',
            balance: 1349.2,
            birthday: 19790101
        }

    ];

   
}]);
