(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('MainController', MainController);


    MainController.$inject = ['$state'];

    function MainController($state) {
        var vm = this;
        vm.continue = function () {
            $state.go('track1');
        };
    }

})(window.angular);