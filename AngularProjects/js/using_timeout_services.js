"use strict"

angular.module('myApp', []);


angular.module('myApp').controller('MainController', ['$timeout', function ($timeout) {

    var vm = this;

    var timeoutPromise = null;
    vm.message = 'No timeout scheduled.';
    vm.delay = 2000;

    vm.startTimeout = function () {
        vm.message = '';
        vm.cancelTimeout();
        vm.message += 'Starting a new timeout...';

        timeoutPromise = $timeout(function (data) {
            vm.message = 'Timeout complete.';
            timeoutPromise = null;
        }, vm.delay, true, { data: 'testing123' });
    };

    vm.cancelTimeout = function () {
        if (timeoutPromise) {
            $timeout.cancel(timeoutPromise);
            timeoutPromise = null;
            vm.message = 'Previous timeout was cancelled.';
        }
    };

}]);



