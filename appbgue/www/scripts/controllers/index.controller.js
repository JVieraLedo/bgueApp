(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('IndexController', IndexController);


    IndexController.$inject = ['$state', '$timeout', '$scope'];

    function IndexController($state, $timeout, $scope) {
        var vm = this;

        $scope.$on('$viewContentLoaded', function() {
            $timeout(
                function () {
                    switch ($state.current.name) {
                        case "home":
                            vm.background = true;
                            break;
                        default:
                            vm.background = false;
                            break;
                    }
                }, 0
            );
        });
    }

})(window.angular);