(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('MainController', MainController);


    MainController.$inject = ['$state', 'dataService'];

    function MainController($state, dataService) {
        var vm = this;

        vm.continue = function () {
            $state.go('track1');
            var now = new Date().getTime() / 1000;
            dataService.loginApp(parseInt(now));
        };

    }

})(window.angular);