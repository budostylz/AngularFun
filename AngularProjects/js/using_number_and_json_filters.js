"use strict"

angular.module('myApp', []); 

angular.module('myApp').controller('MainController', [function () {

    this.user = {
        firstName: 'John',
        lastName: 'Smith',
        accountType: {
            accountId: '4683476348744',
            name: 'checking'
        },
        balance: 1349.2,
        birthday: 257925600000,
        hobbies: ['snowboarding','biking','fishing']
    }

}]);