'use strict';

//Setting up route
angular.module('insrcarrierrevenue').config(['$stateProvider',
	function($stateProvider) {
		// Insrcarrierrevenue state routing
		$stateProvider.
		state('create-insrcarrierrevenue', {
			url: '/insrcarrierrevenue/create',
			templateUrl: 'modules/insrcarrierrevenue/client/views/create-insrcarrierrevenue.client.view.html'
		}).
		state('insrcarrierrevenue', {
			url: '/insrcarrierrevenue/monthly',
			templateUrl: 'modules/insrcarrierrevenue/client/views/insrcarrierrevenue-monthly.client.view.html'
		});
	}
]);