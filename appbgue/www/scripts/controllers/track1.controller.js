﻿(function (angular) {
    'use strict';

    angular.module("bgue.controllers")
        .controller('Track1Controller', Track1Controller);


    Track1Controller.$inject = [];

    function Track1Controller() {
        var vm = this;
        vm.articles = [
            {name: '100 huevos', val:20},
            {name: '200 huevos', val:40},
            {name: '300 huevos', val:60},
            {name: '400 huevos', val:80}
        ];

        vm.todos = [];

        vm.addTodo = function() {
            vm.todos.push({text:vm.todoText, done:false});
            vm.todoText = '';
        };

        vm.remaining = function() {
            var count = 0;
            angular.forEach(vm.todos, function(todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        vm.archive = function() {
            var oldTodos = vm.todos;
            vm.todos = [];
            angular.forEach(oldTodos, function(todo) {
                if (!todo.done) vm.todos.push(todo);
            });
        };

    }

})(window.angular);