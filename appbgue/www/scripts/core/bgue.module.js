// Copyright (c) Microsoft. All rights reserved.  Licensed under the MIT license. See LICENSE file in the project root for full license information.

(function (angular) {
    'use strict';

    document.addEventListener('deviceready', function () {
        angular.bootstrap(document, ['bgue']);
    }, false);

    angular
        .module('bgue', ['ui.router', 'bgue.services', 'bgue.controllers', 'bgue.directives']);
    angular
        .module('bgue.directives', []);
    angular
        .module('bgue.controllers', []);
    angular
        .module('bgue.services', ['ngResource']);

})(window.angular);