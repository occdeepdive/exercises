'use strict';

// ex02-my-first-sse/app/routes/helloSSEWorld.js
// this file contain sample routes to be processed by the Server Side Extension

var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.locals.logger.info('GET on "/" sub-path of helloSSEWorld');
    res.send('This is a response for a GET request on the ("/") sub-path of helloSSEWorld!');
});

app.get('/echo', function (req, res) {
    res.locals.logger.info('GET on "/echo" sub-path of helloSSEWorld');
    res.locals.logger.info(`Query parameters: ${JSON.stringify(req.query)}`);
    res.send(JSON.stringify(req.query));
});

module.exports = app;