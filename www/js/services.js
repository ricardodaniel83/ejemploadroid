
angular.module('starter.services',['ngResource'])


.factory('ServiTaxonomies',function($resource){
	//return $resource('http://jsonplaceholder.typicode.com/users/:user',{user:"@user"});
	return $resource('http://localhost:3200/api/taxonomies/:id',{id:"@id"},{
			    update: {
			      method: 'PUT' // this method issues a PUT request
			    }
  			});
})

.factory('ServiProposals',function($resource){
	return $resource('http://localhost:3200/api/proposals/:id',{id:"@id"},{
			    update: {
			      method: 'PUT' // this method issues a PUT request
			    },
			    countTaxonomy:{
			    	method: 'GET',
			    	isArray: true
			    }
  			});
})

.factory('ServiComments',function($resource){
	return $resource('http://localhost:3200/api/comments/:id',{id:"@id"},{
			    update: {
			      method: 'PUT' // this method issues a PUT request
			    }
  			});
})
