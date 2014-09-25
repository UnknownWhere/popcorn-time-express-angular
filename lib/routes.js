'use strict';

var index = require('./controllers');

module.exports = function(app) {

    app.route('/').get(index.index);
};
