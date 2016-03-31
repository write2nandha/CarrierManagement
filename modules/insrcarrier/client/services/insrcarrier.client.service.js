'use strict';

angular.module('insrcarrier').factory('Insrcarrier', ['$resource',
	function($resource) {
        return $resource('insrcarrier/:insrcarrierId', { insrcarrierId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);

//var app = angular.module('nvd3TestApp', ['nvd3ChartDirectives']);