(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('Track1Controller', Track1Controller);


    Track1Controller.$inject = ['$state', 'dataService', '$timeout', '$q', 'dataSelects'];

    function Track1Controller($state, dataService, $timeout, $q, dataSelects) {
        var vm = this;

        vm.articles = [];
        vm.method = {};
        var order = {};
        var disabledMethod;
        var simulateQuery = true;

        var data = dataService.getData();
        vm.products = dataSelects.getDataProducts();
        vm.querySearch = querySearch;

        if (data.data) {
            vm.articles = data.data.articles;
            vm.totalPrice = data.data.total;
            vm.total = data.data.price;
            vm.method = data.data.method;
            getTotal();
        }

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

        vm.sending = function (method) {
            var sendPrice = 15;
            switch (method.method) {
                case 'shop':
                    vm.showSendValue = false;
                    vm.total = vm.totalPrice - vm.discount;
                    break;
                case 'home':
                    vm.showSendValue = true;
                    vm.total = vm.totalPrice - vm.discount + sendPrice;
                    break;
            }
        };

        vm.continue = function () {
            order.articles = vm.articles;
            order.price = vm.total;
            order.method = vm.method;
            $timeout(
                dataService.updateData(order, 'order')
                , 100);
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
            var sendPrice = 0;
            if (vm.showSendValue) {
                sendPrice = 15;
            }
            vm.total = vm.totalPrice + sendPrice;
            disabledMethod = !(vm.total > 50);
            obtainMethods(disabledMethod);
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
                    method: "casa",
                    disabled: disabled
                },
                {info: "Recoger en tienda", method: "tienda", disabled: false}
            ];
        }

        function querySearch(query) {
            var results = query ? createFilterFor(query, vm.products) : vm.products,
                deferred;
            if (simulateQuery) {
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(results);
                }, Math.random() * 500, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function createFilterFor(query, items) {
            var result = [];

            var searchText = query.toLowerCase();
            angular.forEach(items, function (item) {
                if (item.nombre.toLowerCase().indexOf(searchText) >= 0) result.push(item);
            });

            return result;

        }

    }

})(window.angular);

