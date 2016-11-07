(function (angular) {
    'use strict';

    angular
        .module('bgue.services')
        .factory('dataSelects', dataSelects);

    dataSelects.$inject = [];

    function dataSelects() {
        return {
            getDataProducts: getDataProducts
        };

        function getDataProducts() {
            return [
                {
                    nombre: 'Media Docena Huevos "S"',
                    formato: 'estuche',
                    precio: '1,10',
                    value: 1.1
                },
                {
                    nombre: 'Media Docena Huevos "ML"',
                    formato: 'estuche',
                    precio: '1,50',
                    value: 1.5
                },
                {
                    nombre: 'Sobre de paleta ibérica de bellota',
                    formato: 'unidad 80gr',
                    precio: '9,60',
                    value: 9.6
                },
                {
                    nombre: 'Sobre de lomo ibérico de bellota',
                    formato: 'unidad (80gr)',
                    precio: '8,50',
                    value: 8.5
                },
                {
                    nombre: 'Chorizo ibérico de bellota',
                    formato: 'ristra 200 grs',
                    precio: '4,50',
                    value: 4.5
                },
                {
                    nombre: 'Salchichón ibérico de bellota',
                    formato: 'ristra 200 grs',
                    precio: '4,50',
                    value: 4.5
                },
                {
                    nombre: 'Mixtura Olivas Curry Mix.',
                    formato: 'bote de cristal',
                    precio: '2,80',
                    value: 2.8
                },
                {
                    nombre: 'Mixtura Olivas Algas Mix.',
                    formato: 'bote de cristal',
                    precio: '2,80',
                    value: 2.8
                },
                {
                    nombre: 'Mixtura Olivas Paprika Mix.',
                    formato: 'bote de cristal',
                    precio: '2,80',
                    value: 2.8
                },
                {
                    nombre: 'Mixtura Olivas Picantina Mix.',
                    formato: 'bote de cristal',
                    precio: '2,80',
                    value: 2.8
                },
                {
                    nombre: 'Mixtura Mediterraneo Olivas',
                    formato: 'bote de cristal',
                    precio: '2,40',
                    value: 2.4
                },
                {
                    nombre: 'Mixtura Olivas Margarita',
                    formato: 'bote de cristal',
                    precio: '2,80',
                    value: 2.8
                },
                {
                    nombre: 'Mixtura Olivas de Queso Mix',
                    formato: 'bote de cristal',
                    precio: '3,50',
                    value: 3.5
                },
                {
                    nombre: 'Lata de pimentón dulce',
                    formato: 'unidad (75gr)',
                    precio: '2,60',
                    value: 2.6
                },
                {
                    nombre: 'Lata de pimentón picante',
                    formato: 'unidad (75gr)',
                    precio: '2,80',
                    value: 2.8
                },
                {
                    nombre: 'Tarrito de cristal pimentón dulce',
                    formato: 'unidad (35gr)',
                    precio: '2,30',
                    value: 2.3
                },
                {
                    nombre: 'Tarrito de cristal pimentón picante',
                    formato: 'unidad (35gr)',
                    precio: '2,30',
                    value: 2.3
                },
                {
                    nombre: 'Sopa de tomate',
                    formato: 'bolsa',
                    precio: '2,50',
                    value: 2.5
                },
                {
                    nombre: 'Sopa de calabaza',
                    formato: 'bolsa',
                    precio: '2,50',
                    value: 2.5
                },
                {
                    nombre: 'Sopa de verduras',
                    formato: 'bolsa',
                    precio: '2,50',
                    value: 2.5
                },
                {
                    nombre: 'Sopa hortelana',
                    formato: 'bolsa',
                    precio: '2,50',
                    value: 2.5
                },
                {
                    nombre: 'Sopa jardinera',
                    formato: 'bolsa',
                    precio: '2,50',
                    value: 2.5
                },
                {
                    nombre: 'Sopa de calabaza con ajo y pimentón',
                    formato: 'bolsa',
                    precio: '2,50',
                    value: 2.5
                },
                {
                    nombre: 'Almendra repelada BIO / 200gr',
                    formato: 'bolsa',
                    precio: '4,70',
                    value: 4.7
                },
                {
                    nombre: 'Almendra repelada BIO / 500gr',
                    formato: 'bolsa',
                    precio: '10,20',
                    value: 10.2
                },
                {
                    nombre: 'Almendra piel BIO / 200 gr',
                    formato: 'bolsa',
                    precio: '4,10',
                    value: 4.1
                },
                {
                    nombre: 'Almendra piel BIO / 500 gr',
                    formato: 'bolsa',
                    precio: '8,80',
                    value: 8.8
                },
                {
                    nombre: 'Aceite almendra BIO / 250ml',
                    formato: 'bolsa',
                    precio: '9,20',
                    value: 9.2
                },
                {
                    nombre: 'Harina almendra BIO / 500gr',
                    formato: 'bolsa',
                    precio: '9,50',
                    value: 9.5
                },
                {
                    nombre: 'Castaña',
                    formato: 'Tarrina',
                    precio: '1,50',
                    value: 1.5
                },
                {
                    nombre: 'Higo seco',
                    formato: 'Tarrina',
                    precio: '1,50',
                    value: 1.5
                },
                {
                    nombre: 'Leneus Cayetana',
                    formato: 'botella 1 litro',
                    precio: '4,50',
                    value: 4.5
                },
                {
                    nombre: 'Leneus barrica',
                    formato: 'botella 1 litro',
                    precio: '9,00',
                    value: 9
                },
                {
                    nombre: 'Leneus REISHI',
                    formato: 'botella 1 litro',
                    precio: '12,00',
                    value: 12
                },
                {
                    nombre: 'Leneus Aloe Vera',
                    formato: 'botella 1 litro',
                    precio: '8,60',
                    value: 8.60
                }
            ];
        }

    }

})(window.angular);