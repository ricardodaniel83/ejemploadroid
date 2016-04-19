
angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource) {
   return $resource('http://localhost:5000/taxonomies/:id');
})

/*
.factory('httpTaxonomies',function($http){
	var postUsers = $http.get('http://localhost:5000/taxonomies')
	postUsers.then(function(result) {
	    return $scope.users = result.data;
	});
})*/