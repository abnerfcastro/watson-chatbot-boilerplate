/*!
 * ./public/js/controllers/chat.controller.js
 * 
 * Declares ChatController
 * Authors: Abner Castro
 * Date: August 16th, 2017
 */

(function() {
    'use strict';

    angular
        .module('chatbot.app')
        .controller('ChatController', ChatController);

    ChatController.$inject = ['$log', 'Conversation'];
    function ChatController($log, Conversation) {
        var vm = this;

        vm.input = "";
        vm.messages = [];
        
        vm.sendMessage = function () {
            if (vm.input !== "") {
                var message = {};
                message["recipient"] = "user";
                message["content"] = vm.input;
                vm.messages.push(message);
                vm.input = "";
                $log.log(vm.messages);

                Conversation.sendMessage(message.content)
                    .then(data => {
                        if (data) {
                            var reply = {};
                            reply["recipient"] = "watson";
                            reply["content"] = data.output.text[0];
                            vm.messages.push(reply);
                        }
                    });
            }
        }

        activate();

        ////////////////

        function activate() { }
    }
})();