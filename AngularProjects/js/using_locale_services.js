"use strict"

angular.module('myApp', []);


angular.module('myApp').controller('MainController', ['$locale', function ($locale) {

    this.date = new Date();
    this.cost = 3232.56;

    this.formattedDate = $locale.DATETIME_FORMATS.fullDate;


}]);



