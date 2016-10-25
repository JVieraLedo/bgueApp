(function (angular) {
    'use strict';

    angular
        .module('bgue.services')
        .factory('dataService', dataService);

    dataService.$inject = ['$localStorage'];

    function dataService($localStorage) {
        var factory = {};
        factory.entity = function (object) {
            return {
                articles: object.articles,
                total: object.total,
                discount: object.discount,
                price: object.price,
                method: object.method,
                user: object.user
            };
        };

        return {
            updateData: updateData,
            getData: getData,
            clearData: clearData
        };

        function updateData(object) {
            $localStorage.$default({
                data: factory.entity(object)
            });
        }

        function getData() {
            return $localStorage;
        }

        function clearData() {
            $localStorage.$reset();
        }

    }

})(window.angular);