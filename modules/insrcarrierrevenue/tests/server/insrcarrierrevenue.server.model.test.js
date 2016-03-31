'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
    mongoose = require('mongoose'),
    InsrCarrierRevenue = mongoose.model('InsrCarrierRevenue');

/**
 * Unit tests
 */
describe('InsrCarrierRevenue Model', function () {

    describe('Saving', function () {
        it('saves new record', function (done) {
            var insrCarrierRevenue = new InsrCarrierRevenue({
                program: 'Dentists Advantage',
                revenue: 125,
                currency: 'USD',
                displayRevenue: '125 USD',
                year: '2016',
                month: 'Jan'
            });

            insrCarrierRevenue.save(function (err, saved) {
                should.not.exist(err);
                done();
            });
        });

        // it('throws validation error when name is empty', function (done) {
        //     var insrCarrier = new InsrCarrier({
        //         name: '',
        //         description: 'Empty Name'
        //     });

        //     insrCarrier.save(function (err, saved) {
        //         should.exist(err);
        //         err.errors.name.message.should.equal('name cannot be blank');
        //         done();
        //     });
        // });

        // it('throws validation error when name longer than 20 chars', function(done) {
        //     var insrCarrier = new InsrCarrier({
        //         name: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        //     });

        //     insrCarrier.save(function(err, saved) {
        //         should.exist(err);
        //         err.errors.name.message.should.equal('name must be 15 chars in length or less');
        //         done();
        //     });
        // });

        // it('throws validation error for duplicate InsrCarrier name', function (done) {
        //     var insrCarrier = new InsrCarrier({
        //         name: 'Test description'
        //     });

        //     insrCarrier.save(function (err) {
        //         should.not.exist(err);

        //         var duplicate = new InsrCarrier({
        //             name: 'Test description'
        //         });

        //         duplicate.save(function (err) {
        //             err.err.indexOf('$name').should.not.equal(-1);
        //             err.err.indexOf('duplicate key error').should.not.equal(-1);
        //             should.exist(err);
        //             done();
        //         });
        //     });
        // });
    });

    afterEach(function (done) {
        // NB this deletes ALL insurance carrier details (but is run against a test database)
        //InsrCarrierRevenue.remove().exec();
        done();
    });

});

