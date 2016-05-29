'use strict'

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    this.abilityList = ['Acute Senses', 'Enhanced Strength', 'Speed', 'Agility', 'Stamina', 'Durability', 'Healing and Reflexes'];

    this.user = {
        name: 'Black Panther',
        ability: 'Acute Senses',
        isActive: true
    };

   
}]);

angular.module('myApp').filter('yesorno', function () {

    return function (value) {

        if (value === true) {
            return 'yes';
        } else if (value === false) {
            return 'no';
        } else {
            return 'unknown';
        }
    };

});
