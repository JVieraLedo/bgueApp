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
                method: object.method,
                user: object.user
            };
        };

        factory.entityUserData = function (object) {
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
            return {
                articles: object.articles,
                discount: object.discount,
                method: object.method,
                price: object.price,
                total: object.total
            };
        };

        return {
            updateData: updateData,
            getData: getData,
            clearData: clearData,
            sendData: sendData,
            showAlert: showAlert
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
            bbdd
                .ref('orders/' + data.id).set(getOrder(data));
        }

        function getOrder(data){
            return {
                usuario: this.entityUserData(data.user),
                pedido: this.entityOrderData(data.data)
            }
        }


        function showAlert(confirm) {

            switch (confirm){
                case 'confirm':
                    alert = $mdDialog.alert({
                        template:
                        '<md-dialog>' +
                        '      <div class="p-sm"><md-icon md-svg-icon="success"></md-icon><em class="text-success pl-sm"> PEDIDO REALIZADO</em></div>' +
                        '</md-dialog>'
                    });
                    break;
                case 'cancel':
                    alert = $mdDialog.alert({
                        template:
                        '<md-dialog>' +
                        '      <div class="p-sm"><md-icon md-svg-icon="cancel"></md-icon> <em class="text-danger pl-sm"> PEDIDO CANCELADO</em></div>' +
                        '</md-dialog>'
                    });
                    break;
            }

            $mdDialog
                .show( alert );
        }

    }

})(window.angular);