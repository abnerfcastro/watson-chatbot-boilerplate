/*!
 * ./public/js/app.js
 * 
 * Main Angular module
 * Authors: Abner Castro
 * Date: August 16th, 2017
 */

(function () {
    'use strict';

    angular.module('chatbot.app', [
        'ngRoute',
        'chatbot.app.services'
    ]);

    angular
        .module('chatbot.app')
        .config(['$compileProvider', '$routeProvider', '$locationProvider',
            function ($compileProvider, $routeProvider, $locationProvider) {
                // Uncomment for Production
                // $compileProvider.debugInfoEnabled(false);

                $routeProvider
                    .when('/', {
                        templateUrl: '/views/home.view.html'
                    })
                    .when('/about', {
                        templateUrl: '/views/about.view.html'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });

                $locationProvider.html5Mode(true);

            }
        ]);

})();