/*!
 * ./app.js
 *
 * Main file for the server
 * Authors: Abner Castro
 * Date: August 16th, 2017
 */

'use strict'

// Populate process.env object with variables in .env file
require('dotenv').config();

var express = require('express'),
    app = express();

// Parser for POST requests
var bodyParser = require('body-parser');

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// get the app environment from Cloud Foundry
var env = cfenv.getAppEnv();

// Watson Conversation SDK
var Conversation = require('watson-developer-cloud/conversation/v1');
var conversation = new Conversation({
    // If unspecified here, the CONVERSATION_USERNAME and CONVERSATION_PASSWORD env properties will be checked
    // After that, the SDK will fall back to the bluemix-provided VCAP_SERVICES environment property
    // usernames: '<username>',
    // password: '<password>',
    url: 'https://gateway.watsonplatform.net/conversation/api',
    version_date: '2016-10-21',
    version: 'v1'
});

// Sets up routes
require('./server/routes')(app, conversation);

// general path for serving index.html file
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// start server on the specified port and binding host
app.listen(env.port, '0.0.0.0', function () {
    // print a message when the server starts listening
    console.log("server starting on " + env.url);
});
