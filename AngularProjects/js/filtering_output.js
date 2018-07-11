"use strict"

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {

    this.items = [
        { name: 'Bananas', type: 'fruits' },
        { name: 'Cherries', type: 'fruits' },
        { name: 'Oranges', type: 'fruits' },
        { name: 'Chicken', type: 'meats' },
        { name: 'Beef', type: 'meats' },
        { name: 'Pork', type: 'meats' },
        { name: 'Cheese', type: 'dairy' },
        { name: 'Yogurt', type: 'dairy' },
        { name: 'Beans', type: 'vegetables' },
        { name: 'Celery', type: 'vegetables' },
        { name: 'Bread', type: 'grains' },
        { name: 'Special case fruits', type: 'other' }

    ];

    this.selectedType = this.items.type;

}]);

