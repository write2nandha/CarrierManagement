'use strict';

/**
 * Module dependencies.
 */
//var users = require('../../app/controllers/users.server.controller'),
var	insrcarrierrevenue = require('../controllers/insrcarrierrevenue.server.controller');

module.exports = function(app) {
	// Article Routes
	app.route('/insrcarrierrevenue')
		.get(insrcarrierrevenue.list)
		.post(insrcarrierrevenue.create);

	 app.route('/insrcarrierrevenue/:monthId')
	 	.get(insrcarrierrevenue.listByMonth);
	 	
	 app.route('/Quarterly/:monthsList')
	 	.get(insrcarrierrevenue.listByQuarter);
	// Finish by binding the article middleware
	 //app.param('carrierId', insrcarrierrevenue.carrierById);
	 //app.param('monthId', insrcarrierrevenue.listByMonth);
};