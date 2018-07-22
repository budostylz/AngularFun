"use strict"

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    this.user = {
        firstName: '',
        lastName: '',
        email: '',
        optIn: false,
        selectedColor:'white'
    };

    this.colors = [
        { name: 'White', value: 'white' },
        { name: 'Blue', value: 'blue' },
        { name: 'Red', value: 'red' },
        { name: 'Green', value: 'green' },
        { name: 'Black', value: 'black' },
        { name: 'Brown', value: 'brown' },
        { name: 'Magenta', value: 'magenta' },
        { name: 'Gold', value: 'gold' },
        { name: 'Grey', value: 'grey' }
    ];

}]);



