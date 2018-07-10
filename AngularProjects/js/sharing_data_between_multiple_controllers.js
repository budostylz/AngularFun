"use strict"

angular.module('myApp', []);

angular.module('myApp').controller('ParentController', ['$scope', function ($scope) {

    $scope.model = {
        name: "Carl Johns"
    };


}]);


angular.module('myApp').controller('FirstController', ['$scope', function ($scope) {

}]);


angular.module('myApp').controller('SecondController', ['$scope', function ($scope) {

}]);