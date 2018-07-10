"use strict"

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {

    this.users = [
        {
            firstName: 'John',
            lastName: 'Smith',
            accountType: 'checking',
            balance: 1349.2,
            birthday: 257925600000
        },
        {
            firstName: 'Mary',
            lastName: 'Jones',
            accountType: 'checking',
            balance: 1245.33,
            birthday: 488264400000
        },
        {
            firstName: 'Barry',
            lastName: 'Gold',
            accountType: 'savings',
            balance: 4788.89,
            birthday: -135802800000
        },
        {
            firstName: 'Martha',
            lastName: 'Anderson',
            accountType: 'checking',
            balance: 1349.2,
            birthday: 247212000000
        },

        {
            firstName: 'Micheal',
            lastName: 'Tom',
            accountType: 'savings',
            balance: 1349.2,
            birthday: 460098000000
        },

    ]

}]);



