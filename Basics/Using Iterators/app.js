'use strict'
angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {

    var vm = this;

    var greetings = ['Hi', 'Whats\'s up', 'How\'s it going', 'Hello'];
    var names = ['THING', 'VENOM', 'SILVER SURFER', 'ROUGE'];

    vm.greetingSentences = [];

    angular.forEach(names, function (name) {

        var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        var sentence = randomGreeting + ' ' + name;
        vm.greetingSentences.push(sentence);

    });

}]);






