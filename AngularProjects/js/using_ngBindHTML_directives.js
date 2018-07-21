"use strict"

angular.module('myApp', ['ngSanitize']);


angular.module('myApp').controller('MainController', ['$sce', function ($sce) {

    this.htmlData = 'Hello from <strong>AngularJS</strong>';

    this.dangerousScript = '<script>alert(\'Do something malicious!\');</script>Hello from the dangerous script.';
    this.dangerousCSS = '<span class="some-class" style="color:red">Hello from the dangerous CSS.</span>';
    this.trustedCSS = $sce.trustAsHtml('<span class="some-class" style="color:red">Hello from the trusted CSS.</span>');


}]);



