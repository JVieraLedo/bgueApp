(function (angular) {
    'use strict';
    angular.module('bgue')
        .config(function ($mdThemingProvider, $mdIconProvider) {

            $mdIconProvider
                .defaultIconSet("assets/svg/avatars.svg", 128)
                .icon("add", "icons/add.svg", 48)
                .icon("delete", "icons/delete.svg", 48)
                .icon("left", "icons/left-arrow.svg", 48)
                .icon("logout", "icons/logout.svg", 48)
                .icon("send", "icons/paper-plane.svg", 48)
                .icon("right", "icons/right-arrow.svg", 48);

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