(function () {
  'use strict';

  angular
    .module('insrcarrierrevenue')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Dashboard',
      state: 'insrcarrierrevenue',
      type: 'dropdown'
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'insrcarrierrevenue', {
      title: 'Revenue',
      state: 'insrcarrierrevenue'
    });

    // Add the dropdown create item
    /*
    menuService.addSubMenuItem('topbar', 'insrcarrierrevenue', {
      title: 'Create Revenue Data',
      state: 'create-insrcarrierrevenue'
    });*/
  }
}());
/*'use strict';

// Insrcarrierrevenue module config
angular.module('insrcarrierrevenue').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		// Parameters - (menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position)
        Menus.addMenuItem('topbar', 'Dashboard', 'insrcarrierrevenue', 'dropdown', '/insrcarrierrevenue(/create)?');

        //Parameters - (menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position)
        Menus.addSubMenuItem('topbar', 'insrcarrierrevenue', 'Revenue', 'insrcarrierrevenue/monthly');
        Menus.addSubMenuItem('topbar', 'insrcarrierrevenue', 'Create Revenue Data', 'insrcarrierrevenue/create');        
	}
]);*/
