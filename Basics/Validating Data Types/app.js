'use strict'
angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {

    /*data sets*/
    //this.data = angular.element('<p></p>');//element
    //this.data = { name: 'budostylz', age: 38 };//json
    //this.data = ['what is this?', '', 8];//array
    //this.data = new Date();//date
    this.data = 'what is this?';//string

    this.results = [];

    var isObject = 'Is Object? ' + angular.isObject(this.data);
    var isArray = 'Is Array? ' + angular.isArray(this.data);
    var isString = 'Is String? ' + angular.isString(this.data);
    var isNumber = 'Is Number? ' + angular.isNumber(this.data);
    var isElement = 'Is Element? ' + angular.isElement(this.data);
    var isDate = 'Is Date? ' + angular.isDate(this.data);
    var isDefined = 'Is Defined? ' + angular.isDefined(this.data);
    var isUndefined = 'Is Undefined? ' + angular.isUndefined(this.data);

    this.results.push(isObject, isArray, isString, isNumber, isDate, isElement, isDefined, isUndefined);



}]);






