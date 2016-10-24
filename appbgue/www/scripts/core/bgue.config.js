(function (angular) {
    'use strict';
    angular.module('bgue')
        .config(function ($mdThemingProvider, $mdIconProvider) {

            $mdIconProvider
                .defaultIconSet("assets/svg/avatars.svg", 128)
                .icon("add", "assets/svg/add.svg", 48)
                .icon("share", "assets/svg/share.svg", 24)
                .icon("google_plus", "assets/svg/google_plus.svg", 512)
                .icon("hangouts", "assets/svg/hangouts.svg", 512)
                .icon("twitter", "assets/svg/twitter.svg", 512)
                .icon("phone", "assets/svg/phone.svg", 512);

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