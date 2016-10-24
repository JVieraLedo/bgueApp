(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('Track2Controller', Track2Controller);


    Track2Controller.$inject = [];

    function Track2Controller() {
        var vm = this;
        vm.user = {};

        vm.finish = function () {
            localStorage.dataUser({dataUser: vm.user});
            localStorage.SaveState();
        };

    }

})(window.angular);