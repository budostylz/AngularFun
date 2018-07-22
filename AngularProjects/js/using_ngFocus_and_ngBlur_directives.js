"use strict"

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

	this.user = {

		name: ''
	};

	this.message = '';

	this.sayHello = function(){

		this.message = 'Hello, please enter your name!';

	};

	this.sayGoodbye = function(){

		if(!this.user.name || this.user.name.length == 0){
			this.message = "Awww, you didn\ 't enter your name!";
		}else{
			this.message = "Thanks for entering your name, "+ this.user.name +".";
		}

	};

}]);



