'use strict';

var express = require('express'),
    config = require('./config.js'),
    app = express();

require('./backend/config/routes.js')(app, express);

var server = app.listen(3000, function() {
    console.log('Start ' + config.title);
    console.log('Listening on port %d', server.address().port);
});