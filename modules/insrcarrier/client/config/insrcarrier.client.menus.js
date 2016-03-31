(function () {
  'use strict';

  angular
    .module('insrcarrier')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Insurance Carriers',
      state: 'insrcarrier',
      type: 'dropdown'
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'insrcarrier', {
      title: 'List Carriers',
      state: 'insrcarrier'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'insrcarrier', {
      title: 'New Carrier',
      state: 'create-insrcarrier'
    });
  }
}());

/*'use strict';

// Insrcarrier module config
angular.module('insrcarrier').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		// Parameters - (menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position)
        Menus.addMenuItem('topbar', 'Insurance Carriers', 'insrcarrier', 'dropdown', '/insrcarrier(/create)?');

        //Parameters - (menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position)
        Menus.addSubMenuItem('topbar', 'insrcarrier', 'List Carriers', 'insrcarrier');
        Menus.addSubMenuItem('topbar', 'insrcarrier', 'New Carrier', 'insrcarrier/create');
        //Menus.addSubMenuItem('topbar', 'insrcarrier', 'Chart', 'insrcarrier/chart');
	}
]);
*/
