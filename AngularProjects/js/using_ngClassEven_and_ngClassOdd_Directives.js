"use strict"

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    this.foodList = [
        { name: 'Apples', price: .99 },
        { name: 'Beans', price: 1.99 },
        { name: 'Bread', price: 1.99 },
        { name: 'Carrots', price: 1.99 },
        { name: 'Cereal', price: 3.49 },
        { name: 'Cheese', price: 2.95 },
        { name: 'Chicken', price: 3.99 },
        { name: 'Eggs', price: .99 }
    ];

}]);



