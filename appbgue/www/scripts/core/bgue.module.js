(function (angular) {
    'use strict';

    document.addEventListener("deviceready", function () {
        $cordovaDeviceOrientation.getCurrentHeading().then(function(result) {

        }, function(err) {
            // An error occurred
        });
    }, false);

    angular
        .module('bgue',
            [
                'ngMaterial',
                'ui.router',
                'bgue.services',
                'bgue.controllers',
                'bgue.directives',
                'firebase',
                'ngCordova',
                'ngStorage'
            ]);
    angular
        .module('bgue.directives', []);
    angular
        .module('bgue.controllers', ['ngMessages']);
    angular
        .module('bgue.services', ['ngResource']);

})(window.angular);
