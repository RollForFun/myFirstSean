/**
* @Author: Kevin
* @Date:   2016-06-11T22:07:59-04:00
* @Last modified by:   Kevin
* @Last modified time: 2016-06-11T22:15:09-04:00
*/

'use strict';

// Setting up route
angular.module('projects').config(['$stateProvider',
	function($stateProvider) {
		// Projects state routing
        var access = roleManager.accessLevels;
		$stateProvider.
		// state('listProjects', {
		// 	url: '/projects',
		// 	templateUrl: 'modules/projects/views/list-projects.client.view.html',
    //             data : {
    //                 access : access.user
    //             }
		// }).
		state('createProject', {
			url: '/projects/create',
			templateUrl: 'modules/projects/views/create-project.client.view.html',
                data : {
                    access : access.user
                }
		});
		// state('viewArticle', {
		// 	url: '/projects/:articleId',
		// 	templateUrl: 'modules/projects/views/view-article.client.view.html',
    //             data : {
    //                 access : access.user
    //             }
		// }).
		// state('editArticle', {
		// 	url: '/projects/:articleId/edit',
		// 	templateUrl: 'modules/projects/views/edit-article.client.view.html',
    //             data : {
    //                 access : access.user
    //             }
		// });
	}
]);
