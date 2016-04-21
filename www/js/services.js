
angular.module('starter.services',['ngResource'])


.factory('addTaxonomias',function($resource){
	return $resource('http://jsonplaceholder.typicode.com/users/:user',{user:"@user"});
})
/*
.factory('Session', function ($http) {
   //return $resource('http://localhost:3200/taxonomies/:id');
   return 1;
})

 */
/*
.factory('httpTaxonomies',function($http){
	var postUsers = $http.get('http://localhost:5000/taxonomies')
	postUsers.then(function(result) {
	    return $scope.users = result.data;
	});
})*/