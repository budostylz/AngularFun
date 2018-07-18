"use strict"

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    this.standardBind = 'This is a standard data binding';

    this.firstTemplateBinding = 'this is the first template binding';
    this.secondTemplateBinding = 'this is the second template binding';
    this.nonBindable = 'This should not display because we used non-bindable.';

}]);



