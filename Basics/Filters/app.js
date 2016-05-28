'use strict'

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {
  
    this.user = {
        firstName: 'Stephen',
        middleName: 'Vincent',
        lastName: 'Strange',
        accountType: 'CHECKING',
        balance: 500000
    };

}]);

