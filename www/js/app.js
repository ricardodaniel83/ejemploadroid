// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','starter.services'])

.run(function($ionicPlatform,$http) {
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
  var defaultHTTPHeaders = {
    'Content-type': 'application/json',
    'Accept': 'application/json'
  };
  $http.defaults.headers.post = defaultHTTPHeaders;

})


.config(function($stateProvider,$urlRouterProvider, $ionicConfigProvider){
    $ionicConfigProvider.tabs.position('bottom');
    $stateProvider
       .state('app', {
          cache: false,
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      })
      .state('app.home', {
          cache: false,
          url: '/home',
          views: {
            'menuContent': {
              templateUrl: 'templates/home.html',
              controller: 'HomeCtrl'
            }
          }
      })
      .state('app.listTaxonomies', {
          cache: false,
          url: '/listTaxonomies',
          views: {
            'menuContent': {
              templateUrl: 'templates/taxonomies/lists.html',
              controller: 'TaxListCtrl'
            }
          }
      })
      .state('app.saveTaxonomies', {
          cache: false,
          url: '/saveTaxonomies',
          views: {
            'menuContent': {
              templateUrl: 'templates/taxonomies/save.html',
              controller: 'TaxSaveCtrl'
            }
          }
      })
      .state('app.updateTaxonomies', {
          cache: false,
          url: '/updateTaxonomies/:id',
          views: {
            'menuContent': {
              templateUrl: 'templates/taxonomies/update.html',
              controller: 'TaxUpdCtrl'
            }
          }
      })
    .state('app.listProposalTaxonomy', {
          cache: false,
          url: '/listProposalTaxonomy',
          views: {
            'menuContent': {
              templateUrl: 'templates/proposals/listsTaxonomy.html',
              controller: 'ListPropTaxCtrl'
            }
          }
      })
    .state('app.listProposal',{
         cache: false,
          url: '/listProposal',
          views: {
            'menuContent': {
              templateUrl: 'templates/proposals/list.html',
              controller: 'ListPropCtrl'
            }
          }
    })
      .state('app.saveProposal', {
          cache: false,
          url: '/saveProposal',
          views: {
            'menuContent': {
              templateUrl: 'templates/proposals/save.html',
              controller: 'ProSaveCtrl'
            }
          }
      })

      .state('app.updateProposal', {
          cache: false,
          url: '/updateProposal/:id',
          views: {
            'menuContent': {
              templateUrl: 'templates/proposals/update.html',
              controller: 'ProUpdCtrl'
            }
          }
      })



    $urlRouterProvider.otherwise("/app/home");

})


/****************** FILTROS **************************/
.filter('cortarTexto', function(){
  return function(input, limit){
    return (input.length > limit) ? input.substr(0, limit)+'...' : input;
  };
})
