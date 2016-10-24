(function (angular) {
    'use strict';
    angular.module('bgue')
        .config(function ($mdThemingProvider, $mdIconProvider) {

            $mdIconProvider
                .defaultIconSet("assets/svg/avatars.svg", 128)
                .icon("add", "icons/add.svg", 48)
                .icon("delete", "icons/delete.svg", 48);
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