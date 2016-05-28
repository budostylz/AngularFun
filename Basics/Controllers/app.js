'use strict'

angular.module('myApp', []);

angular.module('myApp').controller('ParentController', ['$scope', function ($scope) {//$scope binds controller with view(index.html)

    $scope.model = {
        name: 'White Queen'
    };
    //$scope.name = "White Queen"; Inheritance Issue


}]);

angular.module('myApp').controller('ChildController', ['$scope', function ($scope) {//$scope binds controller with view(index.html)

}]);

angular.module('myApp').controller('IndependentController', ['$scope', function ($scope) {//$scope binds controller with view(index.html)
    $scope.model = {
        name: 'Independent Woman'
    };
}]);



