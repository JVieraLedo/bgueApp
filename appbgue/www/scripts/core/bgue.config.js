(function (angular) {
    'use strict';
    angular.module('bgue')
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('card')
                .backgroundPalette('green', {
                    'default': '600'
                })
                .dark();
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