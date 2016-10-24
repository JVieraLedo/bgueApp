(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('MainController', MainController);


    MainController.$inject = [];

    function MainController() {
        var vm = this;

        vm.hello = 'HOLAAA';

    }

})(window.angular);