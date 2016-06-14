/**
* @Author: Kevin <kevin>
* @Date:   2016-06-11T00:08:35-04:00
* @Last modified by:   kevin
* @Last modified time: 2016-06-11T00:29:43-04:00
*/

//Configuring the Projects module
angular.module('projects').run([
  'Menus',
  function (Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', 'Projects', 'projects', 'dropdown', '/projects(/create)?');
    Menus.addSubMenuItem('topbar', 'projects', 'Post Projects', 'projects/create');
    Menus.addSubMenuItem('topbar', 'projects', 'List Projects', 'projects');
  }
]);
