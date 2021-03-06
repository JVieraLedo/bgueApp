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
                .icon("right", "icons/right-arrow.svg", 48)
                .icon("cancel", "icons/cancel.svg", 120)
                .icon("success", "icons/checked.svg", 120)
                .icon("eye", "icons/visible.svg", 48);

            $mdThemingProvider
                .theme('bgueTheme')
                .primaryPalette('green', {
                    'default': '900'
                })
                .backgroundPalette('amber', {
                    'default': '100'
                })
                .accentPalette('green');
        })
        .config(['$provide', function ($provide) {
            $provide.decorator('$locale', ['$delegate', function ($delegate) {
                $delegate.NUMBER_FORMATS.DECIMAL_SEP = ',';
                $delegate.NUMBER_FORMATS.GROUP_SEP = '.';
                return $delegate;
            }]);
        }]);

})(window.angular);