"use strict"

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    var vm = this;

    var greetings = ['Hi', 'What\'s up', 'How\'s it going', 'Hello'];
    var names = ['Anelle', 'Anya', 'Chris', 'Derek', 'Lynn', 'Mike'];

    vm.greetingSentences = [];

    angular.forEach(names, function (name) {
        var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        var sentence = randomGreeting + ' ' + name;
        vm.greetingSentences.push(sentence);

    });


}]);



