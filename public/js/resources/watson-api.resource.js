/*!
 * ./public/js/resources/watson-api.resource.js
 * 
 * Declares Watson API service
 * Authors: Abner Castro
 * Date: August 16th, 2017
 */

(function () {
    'use strict';

    angular
        .module('chatbot.app.resources', ['ngResource'])
        .factory('WatsonApi', WatsonApi);

    WatsonApi.$inject = ['$resource'];

    function WatsonApi($resource) {
        return $resource('/api/message', {}, {
            send: {
                method: 'POST'
            }
        });
    }
})();