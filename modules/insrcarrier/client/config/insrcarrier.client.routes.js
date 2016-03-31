'use strict';

//Setting up route
angular.module('insrcarrier').config(['$stateProvider',
	function($stateProvider) {
		// Insrcarrier state routing
		$stateProvider.
		state('create-insrcarrier', {
			url: '/insrcarrier/create',
			templateUrl: 'modules/insrcarrier/client/views/create-insrcarrier.client.view.html'
		}).
		state('view-insrcarrier', {
			url: '/insrcarrier/:insrcarrierId',
			templateUrl: 'modules/insrcarrier/client/views/view-insrcarrier.client.view.html'
		}).
		// state('chart-insrcarrier', {
		// 	url: '/insrcarrier/chart',
		// 	templateUrl: 'modules/insrcarrier/views/chart-insrcarrier.client.view.html'
		// }).
		state('edit-insrcarrier', {
			url: '/insrcarrier/:insrcarrierId/edit',
			templateUrl: 'modules/insrcarrier/client/views/edit-insrcarrier.client.view.html'
		}).
		state('insrcarrier', {
			url: '/insrcarrier',
			templateUrl: 'modules/insrcarrier/client/views/insrcarrier.client.view.html'
		});
	}
]);