'use strict';

// ex02-my-first-sse/app/routes/helloSSEWorld.js
// this file contain sample routes to be processed by the Server Side Extension

var express = require('express');
var app = express();

var nconf = require ('nconf');
var adminServerUrl = nconf.get('atg.server.admin.url')

app.get('/hello', function (req, res) {
    res.locals.logger.info('GET on "/hello" route of helloSSEWorld.js');
    res.send(`This is a response for a GET request on the "/hello" route of helloSSEWorld.js running on  "${adminServerUrl}"!`);
});

app.get('/hello/echo', function (req, res) {
    res.locals.logger.info('GET on "/hello/echo" route of helloSSEWorld.js');
    res.locals.logger.info(`Query parameters: ${JSON.stringify(req.query)}`);
    res.send(JSON.stringify(req.query));
});

module.exports = app;
