(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('Track2Controller', Track2Controller);


    Track2Controller.$inject = [];

    function Track2Controller() {
        var vm = this;
        vm.user = {
            name: 'John Doe',
            email: '',
            phone: '',
            address: 'Mountain View, CA',
            donation: 19.99
        };

    }

})(window.angular);