(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('EndController', EndController);


    EndController.$inject = ['dataService', '$state', '$mdDialog', '$timeout'];

    function EndController(dataService, $state, $mdDialog, $timeout) {
        var vm = this;
        var data = dataService.getData();
        var database = firebase.database();


        vm.user = data.user;
        vm.articles = data.data.articles;
        vm.discount = data.data.discount;
        vm.method = data.data.method;
        vm.total = data.data.price;

        vm.showConfirm = function (ev) {

            var confirm = $mdDialog.confirm()
                .title('Estas seguro de realizar el pedido?')
                .textContent('Te llegara una confirmación al e-mail facilitado.')
                .ariaLabel('Realizar Pedido')
                .targetEvent(ev)
                .ok('REALIZAR!')
                .cancel('CANCELAR');

            $mdDialog.show(confirm)
                .then(
                    function () {
                        dataService.showAlert('confirm');
                        $timeout(
                            function () {
                                $mdDialog.hide();
                                dataService.sendData(database, data);
                                dataService.clearData();
                                $state.go('home');
                            }, 1000
                        );
                    },
                    function () {
                        dataService.showAlert('cancel');
                        $timeout(
                            function () {
                                $mdDialog.hide();
                                dataService.clearData();
                                $state.go('home');
                            }, 1000
                        );
                    });
        };


        vm.cancel = function () {
            dataService.clearData();
            $state.go('home');
        };

    }

})(window.angular);