var app = angular.module('fullStack');

app.controller('MyController', function($scope, myService){
	$scope.getFriends = function(){
		myService.getFriends().then(function(data){
			$scope.friends = data;
			console.log($scope.friends);
		});
	}

	$scope.addFriend = function(){
		myService.addFriend($scope.friend).then(function(res){
			$scope.getFriends()
			
		});
	};

	$scope.getFriends();

});