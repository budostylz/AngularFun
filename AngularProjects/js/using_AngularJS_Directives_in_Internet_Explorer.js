"use strict"

angular.module('myApp', []);

angular.module('myApp').directive('myDirective', function(){
	return{
		template: 'Hello, from AngularJS.',
		restrict: 'AEC'
		//restrict: 'AC' /*Restrict for Attribute and Class for IE8*/
	}

});


angular.module('myApp').controller('MainController', [function () {

	

}]);



