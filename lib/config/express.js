'use strict';

var path = require('path');

module.exports = function(app) {

    var rootpath = path.normalize(__dirname + '/../..');

    app.set('views', rootpath + '/app');

    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
};
