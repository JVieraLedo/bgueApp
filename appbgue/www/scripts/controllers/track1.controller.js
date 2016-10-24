(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('Track1Controller', Track1Controller);


    Track1Controller.$inject = ['localStorage'];

    function Track1Controller(localStorage) {
        var vm = this;

        vm.oferts = [
            {name:"Oferta 1", type: "2 x 1",   price: "12,50", check: false},
            {name:"Oferta 2", type: "100 Ud.", price: "8,50", check: false},
            {name:"Oferta 3", type: "200 Ud.", price: "15,50", check: false},
            {name:"Oferta 4", type: "300 Ud.", price: "23,50", check: false},
            {name:"Oferta 5", type: "400 Ud.", price: "27,50", check: false},
            {name:"Oferta 6", type: "500 Ud.", price: "32,50", check: false}
        ];



        vm.continue = function () {
            var ofertChoices = [];
            for ( var i = 0; i < vm.oferts.length; i++){
                if(vm.oferts[i].check === true){
                    ofertChoices.push(vm.oferts[i]) ;
                }
            }
            localStorage.dataUser({ofertas: ofertChoices});
        };


    }

})(window.angular);