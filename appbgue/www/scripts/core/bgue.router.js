(function (angular) {
    'use strict';
    /**
     * @ngdoc directive
     * @name component.app
     * @description
     * Router Inicial de la aplicación
     */
    angular
        .module('bgue')
        .config(configBgueRoute)
        .run(run);

    configBgueRoute.$inject = ['$stateProvider', '$sceDelegateProvider', '$urlRouterProvider'];
    run.$inject = ['$state'];

    function configBgueRoute($stateProvider, $sceDelegateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                views: {
                    "container": {
                        templateUrl: 'templates/bgue-index.html',
                        controller: 'MainController',
                        controllerAs: 'home'
                    }
                }
            })
            .state('track1', {
                views: {
                    "container": {
                        templateUrl: 'templates/bgue-track1.html',
                        controller: 'Track1Controller',
                        controllerAs: 'track1Ctrl'
                    }
                }
            })
            .state('track2', {
                views: {
                    "container": {
                        templateUrl: 'templates/bgue-track2.html',
                        controller: 'Track2Controller',
                        controllerAs: 'track2Ctrl'
                    }
                }
            })
            .state('end', {
                views: {
                    "container": {
                        templateUrl: 'templates/bgue-end.html',
                        controller: 'EndController',
                        controllerAs: 'endCtrl'
                    }
                }
            });
    }

    function run($state) {
        $state.go('end');
    }

})(window.angular);
