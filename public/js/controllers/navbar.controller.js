/*!
 * ./public/js/controllers/navbar.controller.js
 * 
 * Declares NavbarController
 * Authors: Abner Castro
 * Date: August 16th, 2017
 */

(function() {
    'use strict';

    angular
        .module('chatbot.app')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', '$location'];
    function NavbarController($scope, $location) {				
        $scope.isActive = function (location) {
            return location === $location.path();
        }
    }
    
})();