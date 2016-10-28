(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('Track2Controller', Track2Controller);


    Track2Controller.$inject = ['dataService', '$state', '$timeout'];

    function Track2Controller(dataService, $state, $timeout) {
        var vm = this;
        var idReference = 'PED_' + parseInt(new Date().getTime() / 1000);

        vm.user = {};
        vm.data = dataService.getData();
        vm.data.id = idReference;
        vm.user = vm.data.data.user;

        vm.finish = function () {
            vm.data.user = vm.user;
            $timeout(dataService.updateData(vm.data), 100);
            $state.go('end');
        };

        vm.cancel = function () {
            dataService.clearData();
            $state.go('home');
        };
    }

})(window.angular);