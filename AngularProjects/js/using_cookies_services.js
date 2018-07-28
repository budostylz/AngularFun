"use strict"

angular.module('myApp', ['ngCookies']);


angular.module('myApp').controller('MainController', ['$cookies', function ($cookies) {

    //use getObject(key), putObject(key, value, [options]), if serialization for JSON objects
    var vm = this;

    vm.keys = [];

    vm.addItem = function (itemKey, itemValue) {
        vm.keys.push(itemKey);
        $cookies.put(itemKey, itemValue);
    };

    vm.getItem = function (itemKey) {
        vm.currentItem = $cookies.get(itemKey);
    };

    vm.getItemValue = function (itemKey) {
        return $cookies.get(itemKey);
    };

    vm.removeItem = function (itemKey) {
        vm.keys = vm.keys.filter(function (key) {
            return (key !== itemKey);
        });
        $cookies.remove(itemKey);
    };



}]);



