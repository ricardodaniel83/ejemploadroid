angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('HomeCtrl', function($scope) {

})

.controller("TaxListCtrl",function($scope,$http,addTaxonomias){
   		//$scope.lists = addTaxonomias.query();
   		/*var listTaxo = $http.get('http://jsonplaceholder.typicode.com/users');
   		listTaxo.then(function(result){
   			$scope.list = result.data;
   		});*/
   		$scope.users = addTaxonomias.query();
  
    $scope.titulo ="daniel" ;

})

.controller('ListPropCtrl', function($scope,$stateParams) {
  $scope.taxo = $stateParams.taxonomy;
  $scope.arrayLists = [
     {
      _id:0,
      name:"Expleantur manu graecam",
      body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
      state:"1",
      visitsAll:1,
      likeAll:0,
      dislikeAll:0,
      shareAll:0,
      favoriteAll:1,
      advocacyAll:0,
      disagrementAll:0,
      neutralAll:0,
      uid:2,
      positionX:"",
      positionY:"",
      taxonomy:1
    },
    {
      _id:1,
      name:" 2 Expleantur manu graecam",
      body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
      state:"1",
      visitsAll:1,
      likeAll:0,
      dislikeAll:0,
      shareAll:0,
      favoriteAll:1,
      advocacyAll:0,
      disagrementAll:0,
      neutralAll:0,
      uid:2,
      positionX:"",
      positionY:"",
      taxonomy:2
    },
    {
      _id:3,
      name:" 3 Expleantur manu graecam",
      body:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.",
      state:"1",
      visitsAll:1,
      likeAll:0,
      dislikeAll:0,
      shareAll:0,
      favoriteAll:1,
      advocacyAll:0,
      disagrementAll:0,
      neutralAll:0,
      uid:2,
      positionX:"",
      positionY:"",
      taxonomy:1
    }
  ];


})
