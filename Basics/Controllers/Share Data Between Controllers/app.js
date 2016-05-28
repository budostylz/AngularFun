'use strict'

angular.module('myApp', []);


/*

First Method Using Nesting Approach

angular.module('myApp').controller('ParentController', ['$scope', function ($scope) {//$scope binds controller with view(index.html)
    $scope.model = {
        name: 'Thor'
    };
}]);

angular.module('myApp').controller('FirstController', ['$scope', function ($scope) {}]);
angular.module('myApp').controller('SecondController', ['$scope', function ($scope) {}]);

*/


//Service Approach (seem more elegant than nested approach)
angular.module('myApp').service('SharedService', function () {
    return { name: 'Hulk' };

});

angular.module('myApp').controller('FirstController', ['$scope', 'SharedService', function ($scope, SharedService) {

    $scope.model = SharedService;

}]);

angular.module('myApp').controller('SecondController', ['$scope', 'SharedService', function ($scope, SharedService) {

    $scope.model = SharedService;


}]);



