'use strict'

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {
  
    this.user = {
        name: 'stephen vincent strange ',
        accountType: 'CHECKING',
        balance: 500000
    };

   
}]);

angular.module('myApp').filter('capitalize', function () {

    return function (value) {
        var result = null;
        var words = value.split(' ');
        words.forEach(function (item) {
            if (result) {
                result += ' ';
            } else {
                result = '';
            }
            result += item.substr(0, 1).toUpperCase() + item.substr(1).toLowerCase();
        });
        return result;
    };
});

//add filters to seperate custom library if apps.js gets too large or if you want to organize logic

