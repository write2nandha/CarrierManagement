'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),	
	InsrCarrierRevenue = mongoose.model('InsrCarrierRevenue'),
	_ = require('lodash');


/**
 * Get the error message from error object
 */
var getErrorMessage = function(err) {
	var message = '';

	if (err.code) {
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'Chart already exists';
				break;
			default:
				message = 'Something went wrong';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

//Get the data for the chart from the table InsrCarrierRevenue
exports.list = function (req, res) {
    InsrCarrierRevenue.find().exec(function (err, carriersRevenue) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {
        	//console.log('Inside renderChartData');  
            //console.log(carriersRevenue);  
            res.jsonp(carriersRevenue);
        }
    });
};

/**
 * Chart middleware
 */

 //Get the dashboard data by month
exports.listByMonth = function (req, res) {
    InsrCarrierRevenue.find({month: req.params.monthId}).exec(function (err, carriersRevenue) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {
        	//console.log('Inside list by Month');              
            res.jsonp(carriersRevenue);
        }
    });
};

 //Get the dashboard data by quarter
exports.listByQuarter = function (req, res) {
	var monthsList = req.params.monthsList;
	var monthArray = monthsList.split(',');

    InsrCarrierRevenue.find({$or: [ { "month": monthArray[0] }, { "month": monthArray[1] }, { "month": monthArray[2] } ]})
    .exec(function (err, carriersRevenue) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else {
        	//console.log('Inside list by Month');              
            res.jsonp(carriersRevenue);
        }
    });
};

/** Get category by ID **/
exports.carrierById = function(req, res, next) {
    
    InsrCarrierRevenue.findById(req.params.carrierId).exec(function(err, insrcarrierrevenue){
        if(err){            
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        else{
            //if the category doesn't exist                        
            if(!insrcarrierrevenue) {
                return res.status(404).send({
                    message: 'Carrier not found'
                });
            }           
            req.insrcarrierrevenue = insrcarrierrevenue;   
            //console.log(JSON.stringify(insrcarrierrevenue));         
        }
        next(); 
    });
       
};


/**
 * Create buld insrcarrierrevenues..
 */
exports.create = function(req, res) {
	var insrcarrierrevenueList = [{
						    "program" : "Dentists Advantage",
						    "revenue" : 125,
						    "currency" : "USD",
						    "displayRevenue" : "125 USD",
						    "year" : "2016",
						    "month" : "Jan",
						    "__v" : 0
						},
						{
						    "program" : "PLUS",
						    "revenue" : 350,
						    "currency" : "USD",
						    "displayRevenue" : "350 USD",
						    "year" : "2016",
						    "month" : "Jan",
						    "__v" : 0
						},
						{
						    "program" : "Architects & Engineers",
						    "revenue" : 275,
						    "currency" : "USD",
						    "displayRevenue" : "275 USD",
						    "year" : "2016",
						    "month" : "Jan",
						    "__v" : 0
						},
						{
						    "program" : "Huntington T. Block Insurance Agency",
						    "revenue" : 420,
						    "currency" : "USD",
						    "displayRevenue" : "420 USD",
						    "year" : "2016",
						    "month" : "Jan",
						    "__v" : 0
						},
						{
						    "program" : "K&K Insurance Group",
						    "revenue" : 675,
						    "currency" : "USD",
						    "displayRevenue" : "675 USD",
						    "year" : "2016",
						    "month" : "Jan",
						    "__v" : 0
						},
						{
						    "program" : "TAPL",
						    "revenue" : 320,
						    "currency" : "USD",
						    "displayRevenue" : "320 USD",
						    "year" : "2016",
						    "month" : "Jan",
						    "__v" : 0
						},
						{
						    "program" : "Dentists Advantage",
						    "revenue" : 170,
						    "currency" : "USD",
						    "displayRevenue" : "170 USD",
						    "year" : "2016",
						    "month" : "Feb",
						    "__v" : 0
						},
						{
						    "program" : "PLUS",
						    "revenue" : 280,
						    "currency" : "USD",
						    "displayRevenue" : "280 USD",
						    "year" : "2016",
						    "month" : "Feb",
						    "__v" : 0
						},
						{
						    "program" : "Architects & Engineers",
						    "revenue" : 350,
						    "currency" : "USD",
						    "displayRevenue" : "350 USD",
						    "year" : "2016",
						    "month" : "Feb",
						    "__v" : 0
						},
						{
						    "program" : "Huntington T. Block Insurance Agency",
						    "revenue" : 220,
						    "currency" : "USD",
						    "displayRevenue" : "220 USD",
						    "year" : "2016",
						    "month" : "Feb",
						    "__v" : 0
						},
						{
						    "program" : "K&K Insurance Group",
						    "revenue" : 425,
						    "currency" : "USD",
						    "displayRevenue" : "425 USD",
						    "year" : "2016",
						    "month" : "Feb",
						    "__v" : 0
						},
						{
						    "program" : "TAPL",
						    "revenue" : 620,
						    "currency" : "USD",
						    "displayRevenue" : "620 USD",
						    "year" : "2016",
						    "month" : "Feb",
						    "__v" : 0
						},
						{
						    "program" : "Dentists Advantage",
						    "revenue" : 225,
						    "currency" : "USD",
						    "displayRevenue" : "250 USD",
						    "year" : "2016",
						    "month" : "Mar",
						    "__v" : 0
						},
						{
						    "program" : "PLUS",
						    "revenue" : 175,
						    "currency" : "USD",
						    "displayRevenue" : "175 USD",
						    "year" : "2016",
						    "month" : "Mar",
						    "__v" : 0
						},
						{
						    "program" : "Architects & Engineers",
						    "revenue" : 400,
						    "currency" : "USD",
						    "displayRevenue" : "400 USD",
						    "year" : "2016",
						    "month" : "Mar",
						    "__v" : 0
						},
						{
						    "program" : "Huntington T. Block Insurance Agency",
						    "revenue" : 320,
						    "currency" : "USD",
						    "displayRevenue" : "320 USD",
						    "year" : "2016",
						    "month" : "Mar",
						    "__v" : 0
						},
						{
						    "program" : "K&K Insurance Group",
						    "revenue" : 625,
						    "currency" : "USD",
						    "displayRevenue" : "625 USD",
						    "year" : "2016",
						    "month" : "Mar",
						    "__v" : 0
						},
						{
						    "program" : "TAPL",
						    "revenue" : 540,
						    "currency" : "USD",
						    "displayRevenue" : "540 USD",
						    "year" : "2016",
						    "month" : "Mar",
						    "__v" : 0
						},
						{
						    "program" : "Dentists Advantage",
						    "revenue" : 230,
						    "currency" : "USD",
						    "displayRevenue" : "230 USD",
						    "year" : "2015",
						    "month" : "Apr",
						    "__v" : 0
						},
						{
						    "program" : "PLUS",
						    "revenue" : 250,
						    "currency" : "USD",
						    "displayRevenue" : "250 USD",
						    "year" : "2015",
						    "month" : "Apr",
						    "__v" : 0
						},
						{
						    "program" : "Architects & Engineers",
						    "revenue" : 475,
						    "currency" : "USD",
						    "displayRevenue" : "475 USD",
						    "year" : "2015",
						    "month" : "Apr",
						    "__v" : 0
						},
						{
						    "program" : "Huntington T. Block Insurance Agency",
						    "revenue" : 320,
						    "currency" : "USD",
						    "displayRevenue" : "320 USD",
						    "year" : "2015",
						    "month" : "Apr",
						    "__v" : 0
						},
						{
						    "program" : "K&K Insurance Group",
						    "revenue" : 725,
						    "currency" : "USD",
						    "displayRevenue" : "725 USD",
						    "year" : "2015",
						    "month" : "Apr",
						    "__v" : 0
						},
						{
						    "program" : "TAPL",
						    "revenue" : 540,
						    "currency" : "USD",
						    "displayRevenue" : "540 USD",
						    "year" : "2015",
						    "month" : "Apr",
						    "__v" : 0
						},
						{
						    "program" : "Dentists Advantage",
						    "revenue" : 105,
						    "currency" : "USD",
						    "displayRevenue" : "105 USD",
						    "year" : "2015",
						    "month" : "May",
						    "__v" : 0
						},
						{
						    "program" : "PLUS",
						    "revenue" : 300,
						    "currency" : "USD",
						    "displayRevenue" : "300 USD",
						    "year" : "2015",
						    "month" : "May",
						    "__v" : 0
						},
						{
						    "program" : "Architects & Engineers",
						    "revenue" : 225,
						    "currency" : "USD",
						    "displayRevenue" : "225 USD",
						    "year" : "2015",
						    "month" : "May",
						    "__v" : 0
						},
						{
						    "program" : "Huntington T. Block Insurance Agency",
						    "revenue" : 320,
						    "currency" : "USD",
						    "displayRevenue" : "320 USD",
						    "year" : "2015",
						    "month" : "May",
						    "__v" : 0
						},
						{
						    "program" : "K&K Insurance Group",
						    "revenue" : 575,
						    "currency" : "USD",
						    "displayRevenue" : "575 USD",
						    "year" : "2015",
						    "month" : "May",
						    "__v" : 0
						},
						{
						    "program" : "TAPL",
						    "revenue" : 270,
						    "currency" : "USD",
						    "displayRevenue" : "270 USD",
						    "year" : "2015",
						    "month" : "May",
						    "__v" : 0
						},
						{
						    "program" : "Dentists Advantage",
						    "revenue" : 150,
						    "currency" : "USD",
						    "displayRevenue" : "150 USD",
						    "year" : "2015",
						    "month" : "Jun",
						    "__v" : 0
						},
						{
						    "program" : "PLUS",
						    "revenue" : 270,
						    "currency" : "USD",
						    "displayRevenue" : "270 USD",
						    "year" : "2015",
						    "month" : "Jun",
						    "__v" : 0
						},
						{
						    "program" : "Architects & Engineers",
						    "revenue" : 325,
						    "currency" : "USD",
						    "displayRevenue" : "325 USD",
						    "year" : "2015",
						    "month" : "Jun",
						    "__v" : 0
						},
						{
						    "program" : "Huntington T. Block Insurance Agency",
						    "revenue" : 400,
						    "currency" : "USD",
						    "displayRevenue" : "400 USD",
						    "year" : "2015",
						    "month" : "Jun",
						    "__v" : 0
						},
						{
						    "program" : "K&K Insurance Group",
						    "revenue" : 650,
						    "currency" : "USD",
						    "displayRevenue" : "650 USD",
						    "year" : "2015",
						    "month" : "Jun",
						    "__v" : 0
						},
						{
						    "program" : "TAPL",
						    "revenue" : 200,
						    "currency" : "USD",
						    "displayRevenue" : "200 USD",
						    "year" : "2015",
						    "month" : "Jun",
						    "__v" : 0
						},
						{
						    "program" : "Dentists Advantage",
						    "revenue" : 100,
						    "currency" : "USD",
						    "displayRevenue" : "100 USD",
						    "year" : "2015",
						    "month" : "Oct",
						    "__v" : 0
						},
						{
						    "program" : "PLUS",
						    "revenue" : 200,
						    "currency" : "USD",
						    "displayRevenue" : "200 USD",
						    "year" : "2015",
						    "month" : "Oct",
						    "__v" : 0
						},
						{
						    "program" : "Architects & Engineers",
						    "revenue" : 300,
						    "currency" : "USD",
						    "displayRevenue" : "300 USD",
						    "year" : "2015",
						    "month" : "Oct",
						    "__v" : 0
						},
						{
						    "program" : "Huntington T. Block Insurance Agency",
						    "revenue" : 420,
						    "currency" : "USD",
						    "displayRevenue" : "420 USD",
						    "year" : "2015",
						    "month" : "Oct",
						    "__v" : 0
						},
						{
						    "program" : "K&K Insurance Group",
						    "revenue" : 600,
						    "currency" : "USD",
						    "displayRevenue" : "600 USD",
						    "year" : "2015",
						    "month" : "Oct",
						    "__v" : 0
						},
						{
						    "program" : "TAPL",
						    "revenue" : 500,
						    "currency" : "USD",
						    "displayRevenue" : "500 USD",
						    "year" : "2015",
						    "month" : "Oct",
						    "__v" : 0
						},
						{
						    "program" : "Dentists Advantage",
						    "revenue" : 170,
						    "currency" : "USD",
						    "displayRevenue" : "170 USD",
						    "year" : "2015",
						    "month" : "Nov",
						    "__v" : 0
						},
						{
						    "program" : "PLUS",
						    "revenue" : 250,
						    "currency" : "USD",
						    "displayRevenue" : "250 USD",
						    "year" : "2015",
						    "month" : "Nov",
						    "__v" : 0
						},
						{
						    "program" : "Architects & Engineers",
						    "revenue" : 375,
						    "currency" : "USD",
						    "displayRevenue" : "375 USD",
						    "year" : "2015",
						    "month" : "Nov",
						    "__v" : 0
						},
						{
						    "program" : "Huntington T. Block Insurance Agency",
						    "revenue" : 520,
						    "currency" : "USD",
						    "displayRevenue" : "520 USD",
						    "year" : "2015",
						    "month" : "Nov",
						    "__v" : 0
						},
						{
						    "program" : "K&K Insurance Group",
						    "revenue" : 650,
						    "currency" : "USD",
						    "displayRevenue" : "650 USD",
						    "year" : "2015",
						    "month" : "Nov",
						    "__v" : 0
						},
						{
						    "program" : "TAPL",
						    "revenue" : 440,
						    "currency" : "USD",
						    "displayRevenue" : "440 USD",
						    "year" : "2015",
						    "month" : "Nov",
						    "__v" : 0
						},
						{
						    "program" : "Dentists Advantage",
						    "revenue" : 195,
						    "currency" : "USD",
						    "displayRevenue" : "195 USD",
						    "year" : "2015",
						    "month" : "Dec",
						    "__v" : 0
						},
						{
						    "program" : "PLUS",
						    "revenue" : 150,
						    "currency" : "USD",
						    "displayRevenue" : "150 USD",
						    "year" : "2015",
						    "month" : "Dec",
						    "__v" : 0
						},
						{
						    "program" : "Architects & Engineers",
						    "revenue" : 405,
						    "currency" : "USD",
						    "displayRevenue" : "405 USD",
						    "year" : "2015",
						    "month" : "Dec",
						    "__v" : 0
						},
						{
						    "program" : "Huntington T. Block Insurance Agency",
						    "revenue" : 550,
						    "currency" : "USD",
						    "displayRevenue" : "550 USD",
						    "year" : "2015",
						    "month" : "Dec",
						    "__v" : 0
						},
						{
						    "program" : "K&K Insurance Group",
						    "revenue" : 700,
						    "currency" : "USD",
						    "displayRevenue" : "700 USD",
						    "year" : "2015",
						    "month" : "Dec",
						    "__v" : 0
						},
						{
						    "program" : "TAPL",
						    "revenue" : 340,
						    "currency" : "USD",
						    "displayRevenue" : "340 USD",
						    "year" : "2015",
						    "month" : "Dec",
						    "__v" : 0
						},
						{
						    "program" : "Dentists Advantage",
						    "revenue" : 175,
						    "currency" : "USD",
						    "displayRevenue" : "175 USD",
						    "year" : "2015",
						    "month" : "Jul",
						    "__v" : 0
						},
						{
						    "program" : "PLUS",
						    "revenue" : 230,
						    "currency" : "USD",
						    "displayRevenue" : "230 USD",
						    "year" : "2015",
						    "month" : "Jul",
						    "__v" : 0
						},
						{
						    "program" : "Architects & Engineers",
						    "revenue" : 335,
						    "currency" : "USD",
						    "displayRevenue" : "335 USD",
						    "year" : "2015",
						    "month" : "Jul",
						    "__v" : 0
						},
						{
						    "program" : "Huntington T. Block Insurance Agency",
						    "revenue" : 480,
						    "currency" : "USD",
						    "displayRevenue" : "480 USD",
						    "year" : "2015",
						    "month" : "Jul",
						    "__v" : 0
						},
						{
						    "program" : "K&K Insurance Group",
						    "revenue" : 630,
						    "currency" : "USD",
						    "displayRevenue" : "630 USD",
						    "year" : "2015",
						    "month" : "Jul",
						    "__v" : 0
						},
						{
						    "program" : "TAPL",
						    "revenue" : 260,
						    "currency" : "USD",
						    "displayRevenue" : "260 USD",
						    "year" : "2015",
						    "month" : "Jul",
						    "__v" : 0
						},
						{
						    "program" : "Dentists Advantage",
						    "revenue" : 145,
						    "currency" : "USD",
						    "displayRevenue" : "145 USD",
						    "year" : "2015",
						    "month" : "Aug",
						    "__v" : 0
						},
						{
						    "program" : "PLUS",
						    "revenue" : 260,
						    "currency" : "USD",
						    "displayRevenue" : "260 USD",
						    "year" : "2015",
						    "month" : "Aug",
						    "__v" : 0
						},
						{
						    "program" : "Architects & Engineers",
						    "revenue" : 390,
						    "currency" : "USD",
						    "displayRevenue" : "390 USD",
						    "year" : "2015",
						    "month" : "Aug",
						    "__v" : 0
						},
						{
						    "program" : "Huntington T. Block Insurance Agency",
						    "revenue" : 510,
						    "currency" : "USD",
						    "displayRevenue" : "510 USD",
						    "year" : "2015",
						    "month" : "Aug",
						    "__v" : 0
						},
						{
						    "program" : "K&K Insurance Group",
						    "revenue" : 615,
						    "currency" : "USD",
						    "displayRevenue" : "615 USD",
						    "year" : "2015",
						    "month" : "Aug",
						    "__v" : 0
						},
						{
						    "program" : "TAPL",
						    "revenue" : 215,
						    "currency" : "USD",
						    "displayRevenue" : "215 USD",
						    "year" : "2015",
						    "month" : "Aug",
						    "__v" : 0
						},
						{
						    "program" : "Dentists Advantage",
						    "revenue" : 210,
						    "currency" : "USD",
						    "displayRevenue" : "210 USD",
						    "year" : "2015",
						    "month" : "Sep",
						    "__v" : 0
						},
						{
						    "program" : "PLUS",
						    "revenue" : 340,
						    "currency" : "USD",
						    "displayRevenue" : "340 USD",
						    "year" : "2015",
						    "month" : "Sep",
						    "__v" : 0
						},
						{
						    "program" : "Architects & Engineers",
						    "revenue" : 490,
						    "currency" : "USD",
						    "displayRevenue" : "490 USD",
						    "year" : "2015",
						    "month" : "Sep",
						    "__v" : 0
						},
						{
						    "program" : "Huntington T. Block Insurance Agency",
						    "revenue" : 310,
						    "currency" : "USD",
						    "displayRevenue" : "310 USD",
						    "year" : "2015",
						    "month" : "Sep",
						    "__v" : 0
						},
						{
						    "program" : "K&K Insurance Group",
						    "revenue" : 560,
						    "currency" : "USD",
						    "displayRevenue" : "560 USD",
						    "year" : "2015",
						    "month" : "Sep",
						    "__v" : 0
						},
						{
						    "program" : "TAPL",
						    "revenue" : 415,
						    "currency" : "USD",
						    "displayRevenue" : "415 USD",
						    "year" : "2015",
						    "month" : "Sep",
						    "__v" : 0
						}];
	InsrCarrierRevenue.collection.insert(insrcarrierrevenueList, onInsert);

	function onInsert(err, docs) {
	    if (err) {
	        return res.status(400).send({
                message: getErrorMessage(err)
            });
	    } else {
	        res.jsonp(docs.length);
	    }
	};
};


/**
 * Show the current Chart
 
exports.read = function(req, res) {
	res.jsonp(req.chart);
};

*/

/**
 * Update a Chart
 
exports.update = function(req, res) {
	var chart = req.chart ;

	chart = _.extend(chart , req.body);

	chart.save(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(chart);
		}
	});
};
*/
/**
 * Delete an Chart
 
exports.delete = function(req, res) {
	var chart = req.chart ;

	chart.remove(function(err) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			res.jsonp(chart);
		}
	});
};
*/
/**
 * List of Charts
 
exports.list = function(req, res) { Chart.find().sort('-created').populate('user', 'displayName').exec(function(err, charts) {
		if (err) {
			return res.send(400, {
				message: getErrorMessage(err)
			});
		} else {
			console.log(JSON.stringify(charts));
			res.jsonp(charts);
		}
	});
};
*/


/**
 * Chart authorization middleware
 
exports.hasAuthorization = function(req, res, next) {
	if (req.chart.user.id !== req.user.id) {
		return res.send(403, 'User is not authorized');
	}
	next();
};
*/