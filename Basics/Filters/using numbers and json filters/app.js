'use strict'

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {
  
    this.user = {
        firstName: 'Wade',
        lastName: 'Winston',
        accountype: {
            accountId: '1234567890',
            name: 'checking'
        },
        balance: -1349.2,
        birthday: 199100101,
        hobbies: ['weapons','cracking jokes on people','dating hookers']
    };

   
}]);
