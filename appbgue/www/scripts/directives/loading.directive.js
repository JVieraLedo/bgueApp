(function (angular) {
    'use strict';

    angular.module('bgue.directives')
        .directive('mAppLoading', ['$animate', mAppLoading]);

    function mAppLoading($animate) {
        return ({
            link: link,
            restrict: "C"
        });
        function link(scope, element, attributes) {
            $animate.leave(element.children().eq(1)).then(
                function cleanupAfterAnimation() {
                    // Remove the root directive element.
                    element.remove();
                    // Clear the closed-over variable references.
                    scope = element = attributes = null;
                }
            );
        }
    }
})(window.angular);