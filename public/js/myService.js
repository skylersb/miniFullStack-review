var app = angular.module('fullStack');

app.service('myService', function($http, $q){
	this.getFriends = function(){
		 return $http({
			method: 'GET',
			url: 'http://localhost:3000/friends'
		}).then(function(res){
			return res.data;
		});
	}

	this.addFriend = function(friend){
		return $http({
			method: 'POST',
			url: 'http://localhost:3000/friends/new',
			data: {
				name: friend.name,
				age: friend.age,
				yearMet: friend.yearMet
			}
		})
	};

});