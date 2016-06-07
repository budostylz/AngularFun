'use strict'
angular.module('myApp', []);



angular.module('myApp').factory('RandomNameService',  function ($q, $timeout) {

    var firstNames = ['Doctor', 'Carol', 'War'];
    var lastNames = ['Doom', 'Danvers', 'Machine'];

    return {

        getName: function (nameType) {

            var defer = $q.defer();
            var duration = Math.round(Math.random() * 3000);

            $timeout(function () {

                var name = '';
                switch (nameType) {
                    case 'first':
                        name = firstNames[Math.floor(Math.random() * firstNames.length)];
                        break;

                    case 'last':
                        name = lastNames[Math.floor(Math.random() * lastNames.length)];
                        break;
                }

                defer.resolve(name);



            }, duration);

            return defer.promise;
        }
    }
    

});



angular.module('myApp').controller('MainController', ['$q', 'RandomNameService', function ($q, RandomNameService) {
    
    var vm = this;

    var firstNamePromise = RandomNameService.getName('first');
    var lastNamePromise = RandomNameService.getName('last');

    /* not ideal callback
    firstNamePromise.then(function (name) {
        vm.firstName = name;

    });

    lastNamePromise.then(function (name) {
        vm.lastName = name;

    });

    */

    //ideal callback

    var completed = $q.all([firstNamePromise, lastNamePromise]); //output all entries when asynchronous actions complete

    completed.then(function (data) {
        vm.firstName = data[0];
        vm.lastName = data[1];
    });


}]);


