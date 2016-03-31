'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors.server.controller'),
  InsrCarrier = mongoose.model('InsrCarrier'),
    _ = require('lodash');
    
var crud = require('./crud.server.controller')('InsrCarrier', 'name');

module.exports = crud;
	