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
                        templateUrl: 'templates/bgue-index.html'
                    }
                }
            });
    }
    
    function run($state) {
        $state.go('home');
    }

})(window.angular);
