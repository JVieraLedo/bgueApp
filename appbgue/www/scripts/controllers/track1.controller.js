(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('Track1Controller', Track1Controller);


    Track1Controller.$inject = [];

    function Track1Controller() {
        var vm = this;

        vm.oferts = [
            {name:"Oferta 1", type: "2 x 1",   price: "12,50"},
            {name:"Oferta 2", type: "100 Ud.", price: "8,50"},
            {name:"Oferta 3", type: "200 Ud.", price: "15,50"},
            {name:"Oferta 4", type: "300 Ud.", price: "23,50"},
            {name:"Oferta 5", type: "400 Ud.", price: "27,50"},
            {name:"Oferta 6", type: "500 Ud.", price: "32,50"}
        ];

    }

})(window.angular);