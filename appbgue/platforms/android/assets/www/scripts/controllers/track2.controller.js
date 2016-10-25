(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('Track2Controller', Track2Controller);


    Track2Controller.$inject = ['dataService', '$state', '$timeout'];

    function Track2Controller(dataService, $state, $timeout) {
        var vm = this;
        vm.user = {};
        vm.data = dataService.getData();
        vm.user = vm.data.data.user;

        vm.finish = function () {
            vm.data.user = vm.user;
            $timeout(dataService.updateData(vm.data), 100);
        };

        vm.cancel = function () {
            dataService.clearData();
            $state.go('home');
        };
    }

})(window.angular);