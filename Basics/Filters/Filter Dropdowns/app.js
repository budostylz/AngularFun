'use strict'
angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    this.items = [
        { name: 'Peter Parker', type: 'Avengers' },
        { name: 'Adam Warlock', type: 'Guardians of the Galaxy' },
        { name: 'Thunderball', type: 'Illuminati' },
        { name: 'Grim Reaper', type: 'Lethal Legion' }

    ];

    this.selectedType = ''; //select type
}]);
