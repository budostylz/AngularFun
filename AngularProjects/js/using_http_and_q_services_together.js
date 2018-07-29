"use strict"

//$http services allows AngularJS to communicate with remote servers to transfer data
//$q service performs asynchronous calls within Angular application
//using $http and $ services together prevents passing callbacks and anonymous functions
//you going to need to build a web server or create a web service to get this to work
//go to https://github.com/budostylz/notes/tree/master/07_Version_Control to learn to build a web server

angular.module('myApp', []);

angular.module('myApp').service('AppModel', function ($http, $q) {

    this.getState = function (abbreviation) {

        var defer = $q.defer();

        //see Notes folder for server data
        $http.get('http://localhost:3000/api/public/states/' + abbreviation)
            .then(function (response) {
                defer.resolve(response.data);
            }.bind(this),
                function (response) {
                    defer.reject({ error: response.data, status: response.status });
            });

        return defer.promise;
    }

    this.getSomeStatesAtOnce = function (states) {

        var promise = [];
        states.forEach(function (state) {
            var promise = this.getState(state);
            promise.push(promise);
        }, bind(this));
        return $q.all(promises);
    };

});

angular.module('myApp').controller('MainController', ['AppModel', function (AppModel) {

    var vm = this;

    vm.model = AppModel;
    vm.status = [];

    vm.getState = function (abbreviation) {
        vm.model.getState(abbreviation).then(
            function (data) {
                vm.states.push(data);
            }
        );
    };

    vm.getSomeStates = function () {
        vm.getState('SD');
        vm.getState('NY');
        vm.getState('CA');
        vm.getState('NJ');  
    };

    //this is going to be fullfilled when all promises are complete
    vm.getSomeStatesAtOnce = function () {
        vm.model.getSomeStatesAtOnce(['TX', 'MD', 'GA', 'ND']).then(
            function (results) {
                vm.states = vm.states.concat(results);
            }
        );
    };


}]);

