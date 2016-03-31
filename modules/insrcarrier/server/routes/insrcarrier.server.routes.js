'use strict';

module.exports = function(app) {

    var insrcarrier = require('../controllers/insrcarrier.server.controller');
    //var users = require('../controllers/users.server.controller');

	// Routing logic  
    app.route('/insrcarrier/:insrcarrierId')
        .get(insrcarrier.read)
        .put(insrcarrier.update)
        .delete(insrcarrier.delete);

    app.route('/insrcarrier')
        .get(insrcarrier.list)
        .post(insrcarrier.create);

    // Finish by binding the article middleware
    app.param('insrcarrierId', insrcarrier.getByID);

};