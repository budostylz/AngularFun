"use strict"

angular.module('myApp', []); //application component

angular.module('myApp').controller('ParentController', ['$scope', function ($scope) {

    $scope.model = {
        name: "John Smith"
    };

    //$scope.name = 'John Smith'; /* Primitives break data binding from child to parent controller*/

}]);//parent component

angular.module('myApp').controller('ChildController', ['$scope', function ($scope) {


}]);//child component

angular.module('myApp').controller('IndieController', ['$scope', function ($scope) {

    $scope.model = {
        name: "Michael Johnson"
    };

}]);//child component