(function (angular) {
    'use strict';

    angular
        .module('bgue.services')
        .factory('dataService', dataService);

    dataService.$inject = ['$localStorage', '$mdDialog'];

    function dataService($localStorage, $mdDialog) {
        var factory = {};
        factory.entity = function (object) {
            return {
                articles: object.articles,
                total: object.total,
                discount: object.discount,
                price: object.price,
                method: object.method
            };
        };

        factory.entityUserData = function (object) {
            if (!object.addressAmp) {
                object.addressAmp = 'SIN DATOS';
            }
            if (!object.phone) {
                object.phone = 'SIN DATOS';
            }
            return {
                direccion: object.address,
                direccion_ampliada: object.addressAmp,
                alias: object.alias,
                ciudad: object.city,
                email: object.clientEmail,
                phone: object.phone,
                poblacion: object.poblation
            };
        };
        factory.entityOrderData = function (object) {
            var products = {};

            for (var i = 0; i < object.articles.length; i++) {
                products['prod_' + i] = {};
                products['prod_' + i].product = object.articles[i].product;
                products['prod_' + i].quantity = object.articles[i].quantity;
            }

            return {
                articles: products,
                price: object.price,
                method: object.method.method
            };
        };

        return {
            updateData: updateData,
            getData: getData,
            clearData: clearData,
            sendData: sendData,
            showAlert: showAlert,
            getDataBBDD: getDataBBDD
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

        function sendData(bbdd, data) {
            factory.entityOrderData(data.data);
            bbdd.ref('orders/' + data.id).set({
                usuario: factory.entityUserData(data.user),
                pedido: factory.entityOrderData(data.data)
            });
        }

        function showAlert(confirm) {

            switch (confirm) {
                case 'confirm':
                    alert = $mdDialog.alert({
                        template: '<md-dialog>' +
                        '      <div class="p-sm"><md-icon md-svg-icon="success"></md-icon><em class="text-success pl-sm"> PEDIDO REALIZADO</em></div>' +
                        '</md-dialog>'
                    });
                    break;
                case 'cancel':
                    alert = $mdDialog.alert({
                        template: '<md-dialog>' +
                        '      <div class="p-sm"><md-icon md-svg-icon="cancel"></md-icon> <em class="text-danger pl-sm"> PEDIDO CANCELADO</em></div>' +
                        '</md-dialog>'
                    });
                    break;
            }

            $mdDialog
                .show(alert);
        }

        function getDataBBDD(url){
            return firebase.database().ref(url).once('value');
        }

    }

})(window.angular);