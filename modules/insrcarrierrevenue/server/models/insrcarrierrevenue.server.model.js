'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var InsrCarrierRevenueSchema = new Schema({
	program: {
		type: String,
		default: '',
		required: 'Please fill program name',
		trim: true
	},
	revenue: {
		type: 'Number',
		min: 10,
		max: 100000
	},
	currency: {
		type: String,
		default: 'USD'	
	},
	displayRevenue: {
		type: String,
		default: '0 USD'	
	},
	year: {
		type: String,
		default: '2016'	
	},
	month: {
		type: String,
		default: 'Jan'	
	}
}); 

mongoose.model('InsrCarrierRevenue', InsrCarrierRevenueSchema);