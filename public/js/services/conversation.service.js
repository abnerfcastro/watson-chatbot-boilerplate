/*!
 * ./public/js/services/conversation.service.js
 * 
 * Declares Conversation service
 * Authors: Abner Castro
 * Date: August 16th, 2017
 */

(function () {
    'use strict';

    angular
        .module('chatbot.app.services', ['ngResource', 'chatbot.app.resources'])
        .factory('Conversation', Conversation);

    Conversation.$inject = ['$log', 'WatsonApi'];

    function Conversation($log, $watson) {
        var service = {
            sendMessage: sendMessage
        };

        return service;

        function sendMessage(contents) {
            return $watson.send({
                message: contents
            }).$promise;
        }
    }
})();