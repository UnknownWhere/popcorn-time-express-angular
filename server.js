'use strict';

var express = require('express'),
    app = express();

require('./lib/routes')(app);
require('./lib/config/express')(app);

var server = app.listen(9001, function(){
    console.log('Express server is listening on port %d', server.address().port);
});
