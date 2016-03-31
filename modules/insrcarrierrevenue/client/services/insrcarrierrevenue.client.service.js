'use strict';

angular.module('insrcarrierrevenue').factory('InsrCarrierRevenue', ['$resource',
	function($resource) {
        return $resource('insrcarrierrevenue/:monthId', { }, 
            {
            update: {
                method: 'PUT'
            },
            getMonthlydata: {
            	method: 'GET'
            }            
        });
    }
]);

/*
angular.module('insrcarrierrevenue').factory('Quarterly', ['$resource',
    function($resource) {
        return $resource('Quarterly/:monthsList', { }, 
            {
            update: {
                method: 'PUT'
            },
            getQuarterlydata: {
                method: 'GET'
            }            
        });
    }
]); */