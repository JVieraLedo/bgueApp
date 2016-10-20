(function (angular) {
    'use strict';
    angular.module('bgue')
        .config(function ($mdThemingProvider) {
            // $mdThemingProvider.theme('bgueTheme')
            //     .primaryPalette('green')
            //     .accentPalette('orange');
            $mdThemingProvider
                .theme('bgueTheme')
                .primaryPalette('light-green', {
                    'default': '500',
                    'hue-2': '800'
                })
                .backgroundPalette('green', {
                    'default': '50'
                })
                .accentPalette('green');
        });
})(window.angular);