/**
* @Author: Kevin
* @Date:   2016-06-11T22:22:40-04:00
* @Last modified by:   Kevin
* @Last modified time: 2016-06-13T22:29:26-04:00
*/

'use strict'

angular.module('projects').controller('ProjectsController', ['$scope', '$stateParams', '$location','User', 'Authentication','Message', 'Projects',
	function($scope, $stateParams, $location,User, Authentication,Message, Projects) {
		$scope.user = User.get();

		$scope.create = function() {
			var project = new Projects({
				title: this.title,
				content: this.content
			});
			project.$save(function(response) {
                Message.success('Project','Project successfully created');
				$location.path('projects/' + response.id);

				$scope.title = '';
				$scope.content = '';
			}, function(errorResponse) {
                Message.error('Project',errorResponse.data.message);
			});
		};

/*
		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					$location.path('articles');
				});
			}
		};

		$scope.update = function() {
			var article = $scope.article;

			article.$update(function() {
                Message.success('Article','Articlesuccessfully updated');
				$location.path('articles/' + article.id);
			}, function(errorResponse) {
                Message.error('Article',errorResponse.data.message);
			});
		};

		$scope.find = function() {
			$scope.articles = Articles.query();
		};

		$scope.findOne = function() {
			$scope.article = Articles.get({
				articleId: $stateParams.articleId
			});
		};

    */
	}
]);
