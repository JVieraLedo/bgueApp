(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('Track1Controller', Track1Controller);


    Track1Controller.$inject = ['$firebaseArray', 'dataService', 'FIREBASE_URL'];

    function Track1Controller($firebaseArray, dataService, FIREBASE_URL) {
        var vm = this;
        var database = firebase.database();


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

        vm.articles = [];

        vm.addArticle = function () {
            var objectPost = {product: vm.product, quantity: vm.quantity, price: (vm.product.val * vm.quantity.val)};
            vm.articles.push(objectPost);
            dataService.postData(objectPost);
        };

    }

})(window.angular);