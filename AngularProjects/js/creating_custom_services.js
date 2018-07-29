"use strict"

angular.module('myApp', []);

//uncomment either factory or service patterns

/*
angular.module('myApp').factory('AppModel', function () {
    //custom service using factory


    
     // Factory Pattern:
      //1. Creates object
      //2. Assigns values to object
      //3. Returns object as service
    

    var model = {}; //1. Creates object
    model.user = {//2. Assigns values to object
        name: 'John Smith'
    };

    model.sayHello = function () {
        alert('Hello from AngularJS in Factory service.');
    };

    return model; //3. Returns object as service



});

*/

angular.module('myApp').service('AppModel', function () {
    //custom service using service
  
     //Service Pattern:
     //1. Uses 'this' to attach to function
   
    this.user = {//2. Assigns values to object
        name: 'John Smith'
    };

    this.sayHello = function () {
        alert('Hello from AngularJS in Service service.');
    };

});



//2-way data binding exists between controlller variables and factory service via AppModel

angular.module('myApp').controller('MainController', ['AppModel', function (AppModel) {

    this.model = AppModel;
}]);

angular.module('myApp').controller('FirstController', ['AppModel', function (AppModel) {

    this.model = AppModel;

    this.user = {
        name: 'Michael Scott'
    };
}]);

angular.module('myApp').controller('SecondController', ['AppModel', function (AppModel) {

    this.model = AppModel;

    this.user = {
        name: 'Jane Doe'
    };


}]);







