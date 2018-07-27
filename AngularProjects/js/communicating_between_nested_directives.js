"use strict"

angular.module('myApp', []);

//set directive, directive will be converted to train-case in Angular
angular.module('myApp').directive('tstSchoolView', function () { //parent directive

    return {
        templateUrl: '../templates/school2.html',//html fragment
        restrict: 'E',
        transclude: true,
        controller: function ($scope) {

            $scope.students = [];

            this.register = function (name, studentNumber) {
                $scope.students.push({ name: name, studentNumber: studentNumber });
            }
        }
    };

});

angular.module('myApp').directive('tstStudent', function () {//child directive

    return {
        restrict: 'E',
        require: '^tstSchoolView',//^ find directive to attach to and get controller up element chain
        templateUrl: '../templates/student.html',//html fragment
        scope: {
            name: '@',
            studentNumber:'@'
        },
        link: function (scope, element, attrs, schoolController) {
            schoolController.register(scope.name, scope.studentNumber);//link to parent directive
        }
    };
});




angular.module('myApp').controller('MainController', [function () {


}]);

