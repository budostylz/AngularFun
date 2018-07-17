"use strict"

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    this.cars = [
        { make: 'Mazda', model: 'Miata', year: 2001 },
        { make: 'Toyota', model: 'Prius', year: 2013 },
        { make: 'Telsa', model: 'S', year: 2015 },
        { make: 'BMW', model: '325i', year: 2012 },
        { make: 'Lexus', model: 'IS 250', year: 2009 },
        { make: 'Subaru', model: 'Outback', year: 2014 }

    ];

}]);



