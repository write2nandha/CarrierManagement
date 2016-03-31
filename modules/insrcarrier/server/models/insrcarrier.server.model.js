'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/*
Validation
*/
function validateLength(v) {
    // a custom validation function for checking string length to be used by the model
    return v.length <= 25;
}

/**
 * Category Schema = new model
 */
var InsrCarrierSchema = new Schema({
	// Insurance Carrier model fields   
    name: {
        type: 'String',
        default: '',
        trim: true,
        unique: true,
        required: 'name cannot be blank', // Make this a required field
        validate: [validateLength, 'name must be 25 chars in length or less']
    },

    description: {
        type: 'String',
        default: '',
        trim: true
    },

    company: {
        type: 'String',
        enum: ['Affinity', 'AUM']      
    },

    commission: {
        type: 'Number',
        min: 10,
        max: 90        
    },

    created: {
        type: 'Date',
        default: Date.now
    }
});

mongoose.model('InsrCarrier', InsrCarrierSchema);
