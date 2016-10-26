(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('EndController', EndController);


    EndController.$inject = ['dataService', '$state'];

    function EndController(dataService, $state) {
        var vm = this;
        var data = dataService.getData();
        vm.user = data.user;
        vm.articles = data.data.articles;
        vm.discount = data.data.discount;
        vm.method = data.data.method;
        vm.totalPrice = data.data.price;
        vm.total = data.data.total;

        vm.cancel = function () {
            dataService.clearData();
            $state.go('home');
        };
    }

})(window.angular);