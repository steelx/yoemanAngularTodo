'use strict';

angular.module('yoAngularTodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    
    var todosInStore = localStorageService.get('awesomeThings');
	$scope.awesomeThings = todosInStore && todosInStore.split('\n') || [];
	$scope.$watch('awesomeThings', function () {
	  localStorageService.add('awesomeThings', $scope.awesomeThings.join('\n'));
	}, true);
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];

    $scope.addTodo = function () {
	  $scope.awesomeThings.push($scope.todo);
	  $scope.todo = '';
	};

	$scope.removeTodo = function (index) {
	  $scope.awesomeThings.splice(index, 1);
	};
  });
