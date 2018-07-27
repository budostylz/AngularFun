"use strict"

angular.module('myApp', []);

//set directive, directive will be converted to train-case in Angular
angular.module('myApp').directive('tstSchoolView', function () {

    return {
        templateUrl: '../templates/school.html',//html fragment
        restrict: 'E',
        controller: function ($scope) {

            $scope.courses = [];

            this.addCourse = function (courseName) {
                $scope.courses.push(courseName);
                console.log(courseName + ' added to curriculum.');
            }
        }
    };

});

angular.module('myApp').directive('tstCourseBiology', function () {

    return {
        restrict: 'A',
        require: 'tstSchoolView',
        link: function (scope, elem, attrs, schoolController) {
            console.log('Biology course created.');
            schoolController.addCourse('Biology');
        }
    };
});

angular.module('myApp').directive('tstCoursePhysics', function () {

    return {
        restrict: 'A',
        require: 'tstSchoolView',
        link: function (scope, elem, attrs, schoolController) {
            console.log('Physics course created.');
            schoolController.addCourse('Physics');
        }
    };
});

angular.module('myApp').directive('tstCourseChemistry', function () {

    return {
        restrict: 'A',
        require: 'tstSchoolView',
        link: function (scope, elem, attrs, schoolController) {
            console.log('Chemistry course created.');
            schoolController.addCourse('Chemistry');
        }
    };
});



angular.module('myApp').controller('MainController', [function () {


}]);

