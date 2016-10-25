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
                .primaryPalette('green', {
                    'default': '900'
                })
                .backgroundPalette('amber', {
                    'default': '100'
                })
                .accentPalette('green');
        });
})(window.angular);