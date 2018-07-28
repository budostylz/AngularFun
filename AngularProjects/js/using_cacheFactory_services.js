"use strict"

angular.module('myApp', []);


angular.module('myApp').controller('MainController', ['$cacheFactory', function ($cacheFactory) {

    //vm ---> view model
    var vm = this;

    vm.keys = [];
    vm.cache = $cacheFactory('testCache');

    this.addItem = function (itemKey, itemValue) {
        vm.keys.push(itemKey);
        vm.cache.put(itemKey, itemValue);
    };

    this.getItem = function (itemKey) {
        vm.currentItem = vm.cache.get(itemKey);
    };

    this.removeItem = function (itemKey) {
        vm.keys = vm.keys.filter(function (key) {
            return (key !== itemKey);
        });
        vm.cache.remove(itemKey);
    };

}]);



