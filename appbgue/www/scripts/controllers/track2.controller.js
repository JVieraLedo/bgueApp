(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('Track2Controller', Track2Controller);


    Track2Controller.$inject = ['localStorage'];

    function Track2Controller(localStorage) {
        var vm = this;
        vm.user = {};

        vm.finish = function () {
            localStorage.dataUser({dataUser: vm.user});
            localStorage.SaveState();
        };

    }

})(window.angular);