/*
 Route definitions
 - Don't change the order of the route-categories - it will cause the application to break
 */

'use strict';

module.exports = function(app, express){
    // static routes
    app.use('/', express.static('./frontend'));

    // api routes
    var home = require('./../controllers/api/home.js');
    var goodbye = require('./../controllers/api/goodbye.js');
    var moeder = require('./../controllers/api/moeder.js');
    
    app.get('/hello', home.index);
    app.get('/goodbye', goodbye.index);

    app.get('/moeder', moeder.index);
    app.get('/moeder/zweet', moeder.streken);

	app.get('/optel/:a/:b', moeder.optel);



    // catch-all
    app.get('*', function(req, res){ return res.json(404); });
};