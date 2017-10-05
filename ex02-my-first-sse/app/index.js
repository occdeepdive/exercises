'use strict';

// ex02-my-first-sse/app/index.js
// this file is a local node server to test code before uploading to OCCS

var winston = require('winston');
var express = require('express');
var server = module.exports = express();
var helloRoutes = require('./routes/helloSSEWorld');

var localPort = 3000;
var helloPrefix = '/ccstorex/custom/';

var logger = new (winston.Logger)({
  levels: {
    error: 0,
    warning: 1,
    info: 2,
    debug: 3
  },
  transports: [
    new (winston.transports.Console)(
      {level : 'debug', colorize: true}
    )
  ]
});

server.use(function(req, res, next) {
  if (!res.locals) {
    res.locals = {};
  }
  res.locals.logger = logger;
  next();
});

server.use(helloPrefix, helloRoutes);

server.get('/', function (req, res) {
    res.locals.logger.info('GET on / of server');
    res.send('This is a response for a GET request on the root ("/") path of the server!');
});

server.listen(localPort, function () {
    winston.log('info',`Local server listening on port ${localPort}, helloSSEWorld routes bound to ${helloPrefix}...`);
});