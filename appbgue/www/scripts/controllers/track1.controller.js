(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('Track1Controller', Track1Controller);


    Track1Controller.$inject = ['$state', 'dataService', '$timeout', '$q', 'dataSelects'];

    function Track1Controller($state, dataService, $timeout, $q, dataSelects) {
        var vm = this;

        vm.articles = [];
        var order = {};
        var simulateQuery = true;

        var data = dataService.getData();
        vm.products = dataSelects.getDataProducts();
        vm.querySearch = querySearch;

        if (data.data) {
            vm.articles = data.data.articles;
            vm.totalPrice = data.data.total;
            vm.total = data.data.price;
            getTotal(true);
        }

        vm.addArticle = function () {
            var objectPost = {
                product: vm.product.nombre,
                quantity: vm.quantity,
                format: vm.product.formato,
                price: (vm.product.value * vm.quantity)
            };
            vm.articles.push(objectPost);
            clearDataProduct();
            getTotal();
        };

        vm.removeArt = function (index) {
            vm.articles.splice(index, 1);
            getTotal(true);

        };

        vm.continue = function () {
            order.articles = vm.articles;
            order.price = vm.total;
            $timeout(
                dataService.updateData(order, 'order')
                , 100);
            $state.go('track2');
        };

        vm.cancel = function () {
            dataService.clearData();
            $state.go('home');
        };

        vm.pattern = function () {
            vm.quantity = vm.quantity ? parseInt(vm.quantity) : vm.quantity;
        };

        function clearDataProduct() {
            var autoChild = document.getElementById('autocomplete').firstElementChild;
            var el = angular.element(autoChild);
            el.scope().$mdAutocompleteCtrl.scope.selectedItem = null;
            vm.quantity = null;
        }

        function getTotal() {
            vm.totalPrice = totals();
            vm.total = vm.totalPrice;
        }

        function totals() {
            var total = 0;
            for (var i = 0; i < vm.articles.length; i++) {
                var article = vm.articles[i];
                total += article.price;
            }
            return total;
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

