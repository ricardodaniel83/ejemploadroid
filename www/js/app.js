// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
       .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      })
      .state('app.home', {
          url: '/home',
          views: {
            'menuContent': {
              templateUrl: 'templates/home.html',
              controller: 'HomeCtrl'
            }
          }
      })
      .state('app.listPropuesta', {
          url: '/listPropuesta/:taxonomy',
          views: {
            'menuContent': {
              templateUrl: 'templates/listPropuesta.html',
              controller: 'ListPropCtrl'
            }
          }
      })


    $urlRouterProvider.otherwise("/app/home");

})

.filter('cortarTexto', function(){
  return function(input, limit){
    return (input.length > limit) ? input.substr(0, limit)+'...' : input;
  };
})

.controller('AppCtrl', function($scope) {

})

.controller('HomeCtrl', function($scope) {

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
