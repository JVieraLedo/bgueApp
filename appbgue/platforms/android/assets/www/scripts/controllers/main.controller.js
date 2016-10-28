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
        vm.continue = function () {
            $state.go('track1');
        };
    }

})(window.angular);