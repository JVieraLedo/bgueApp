(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('Track1Controller', Track1Controller);


    Track1Controller.$inject = ['$state', 'dataService', '$timeout'];

    function Track1Controller($state, dataService, $timeout) {
        var vm = this;

        vm.articles = [];
        vm.method = {};
        var order = {};
        var disabledMethod;

        var data = dataService.getData();

        if(data.data){
            vm.articles = data.data.articles;
            vm.totalPrice = data.data.total;
            vm.discount = data.data.discount;
            vm.total = data.data.price;
            vm.method = data.data.method;
            getTotal();
        }


        vm.products = [
            {name: '100 huevos', val: 20},
            {name: '200 huevos', val: 40},
            {name: '300 huevos', val: 60},
            {name: '400 huevos', val: 80}
        ];
        vm.quantities = [
            {value: '1 Und.', val: 1},
            {value: '2 Und.', val: 2},
            {value: '3 Und.', val: 3},
            {value: '4 Und.', val: 4},
            {value: '5 Und.', val: 5},
            {value: '6 Und.', val: 6},
            {value: '7 Und.', val: 7},
            {value: '8 Und.', val: 8},
            {value: '9 Und.', val: 9},
            {value: '10 Und.', val: 10},
            {value: '15 Und.', val: 15},
            {value: '20 Und.', val: 20},
            {value: '25 Und.', val: 25},
            {value: '50 Und.', val: 50},
            {value: '100 Und.', val: 100}
        ];

        vm.addArticle = function () {
            var objectPost = {product: vm.product, quantity: vm.quantity, price: (vm.product.val * vm.quantity.val)};
            vm.articles.push(objectPost);
            clearDataProduct();
            getTotal();
        };

        vm.removeArt = function (index) {
            vm.articles.splice(index, 1);
            getTotal();

        };

        vm.continue = function () {
            order.articles = vm.articles;
            order.total = vm.totalPrice;
            order.discount = vm.discount;
            order.price = vm.total;
            order.method = vm.method;
            $timeout(dataService.updateData(order, 'order'), 100);
            $state.go('track2');
        };

        vm.cancel = function () {
            dataService.clearData();
            $state.go('home');
        };

        function clearDataProduct() {
            vm.product = null;
            vm.quantity = null;
        }

        function getTotal() {
            vm.totalPrice = totals();
            vm.discount = discounts();
            vm.total = vm.totalPrice - vm.discount;
            disabledMethod = !(vm.total > 50);
            obtainMethods(disabledMethod);
        }

        function discounts() {
            var total = totals();
            if (total <= 10) {
                return 10;
            } else if (total > 10 && total <= 60) {
                return 20;
            } else if (total > 60) {
                return 30;
            }
        }

        function totals() {
            var total = 0;
            for (var i = 0; i < vm.articles.length; i++) {
                var article = vm.articles[i];
                total += article.price;
            }
            return total;
        }

        function obtainMethods(disabled) {
            vm.method = null;
            vm.methodTypes = [
                {
                    info: "Envío a domicilio, solo con pedidos superiores a 50€. (+ 15€)",
                    method: "home",
                    disabled: disabled
                },
                {info: "Recoger en tienda", method: "shop", disabled: false}
            ];
        }


    }

})(window.angular);