(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('MainController', MainController);


    MainController.$inject = ['$state', 'dataService'];

    function MainController($state, dataService) {
        var vm = this;
        var data = dataService.getData();
        if(data.data){
            dataService.clearData();
        }

        dataService.getDataBBDD('orders').then(
            function (snapshot) {
                var pedidos = snapshot.val();
            }
        );
        
        vm.continue = function () {
            $state.go('track1');
        };
    }

})(window.angular);