"use strict"

angular.module('myApp', []);

//THIS IS BAD
var mainCtrl = null;

angular.module('myApp').controller('MainController', [function () {

    mainCtrl = this;

    var vm = this;

    vm.clickCount = 0;

    vm.updateClickCount = function (amount) {
        vm.clickCount += amount;
    }

}]);

// THIS IS ALSO BAD
function externalClick(elem, amount) {

    var $scope = angular.element(elem).scope();
    mainCtrl.clickCount += parseInt(amount);
    $scope.$apply();
}



