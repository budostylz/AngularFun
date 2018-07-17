"use strict"

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    var vm = this;

    vm.showFirstItem = true;
    vm.showSecondItem = false;
    vm.hideThirdItem = true;

    vm.isSecondItemShowing = function () {
        return vm.showSecondItem;
    };


}]);



