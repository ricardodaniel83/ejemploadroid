angular.module('starter.controllers', [])

/*********** CONTROLADORES INICIO APLICACION **************/
.controller('AppCtrl', function($scope) {

})

.controller('HomeCtrl', function($scope) {

})



/********* CONTROLADORES DE CRUD TAXONOMIAS ***********/

.controller("TaxListCtrl",function($scope,ServiTaxonomies,$state,$ionicModal){
   		$scope.lists = ServiTaxonomies.query();
      $scope.data = {showDelete: false};
      $scope.deleteTaxonomy = function(id){
          //$scope.list.splice($scope.list.indexOf(item), 1);
          ServiTaxonomies.delete({id:id});
          $state.go('app.listTaxonomies');
      };
})

.controller('TaxSaveCtrl', function ($scope,ServiTaxonomies,$state) {
   
    $scope.formData = {
      name:'',
      description:'',
      type:'user',
      uid:'2'
    };
    
    $scope.saveTaxonomy = function(){
       ServiTaxonomies.save($scope.formData);
       console.log($scope.formData);
        $state.go('app.listTaxonomies');
    }

})

.controller('TaxUpdCtrl', function ($scope,ServiTaxonomies,$stateParams,$state) {
    $scope.formData = ServiTaxonomies.get({id:$stateParams.id});
    
    $scope.saveTaxonomy= function(){
      objTaxonomia = $scope.formData;
      ServiTaxonomies.update({id:$stateParams.id},{
        name:$scope.formData.name,
        description: $scope.formData.description,
      });
       $state.go('app.listTaxonomies');
    }
  
})

/*********** CONTROLADORES DEL CRUD PROPUESTAS ***********/
.controller('ProSaveCtrl',function($scope,ServiProposals){
    $scope.formData = {
      name: "",
      description: "",
      state: "1",
      visitsAll: 0,
      likeAll: 0,
      dislikeAll: 0,
      shareAll: 0,
      favoriteAll: 0,
      abvocacyAll: 0,
      disagreementAll: 0,
      neutralAll: 0,
      positionX:"123123",
      positionY:"54645645"
    };

     $scope.saveProposal= function(){
       ServiProposals.save($scope.formData);
       $state.go('app.listProposal');
    }

})
.controller('ProUpdCtrl', function($scope,ServiProposals,$stateParams,$state){
   $scope.formData = ServiProposals.get({id:$stateParams.id});
    
    $scope.saveProposal= function(){
      objProposal = $scope.formData;
      ServiProposals.update({id:$stateParams.id},{
        name:$scope.formData.name,
        description: $scope.formData.description,
      });
       $state.go('app.listProposal');
    }
})

.controller('ListPropCtrl',function($scope,ServiProposals,$state,$ionicModal){
    $scope.list = ServiProposals.query();
     $scope.data = {showDelete: false};
      $scope.deleteProposal = function(id){
          //$scope.list.splice($scope.list.indexOf(item), 1);
          ServiProposals.delete({id:id});
          $state.go('app.listProposal');
      };
  
})
.controller('ListPropTaxCtrl', function($scope,ServiProposals,ServiComments) {
    //$scope.taxo = $stateParams.taxonomy;  /* Pasar datos  al controlador usamos $stateParams*/
    $scope.lists = ServiProposals.query();
    $scope.addValueType = function(idProp,idType){
      var objProposal = ServiProposals.get({id:idProp}, function(data){
          objProposal.name = "Estoy modificando";
          objProposal.$update();
      });
        //console.log($scope.objProposal);
        /*alert(objProposal.favoriteAll);
      switch(idType){
         case 'favoriteAll':
            objProposal.favoriteAll = objProposal.favoriteAll + 1; 
            alert(objProposal.favoriteAll);
         break;
         case 'visitsAll':
            objProposal.visitsAll = objProposal.visitsAll +1;
         break;
         case 'shareAll':
            objProposal.shareAll = objProposal.shareAll + 1;
         break;
         case 'abvocacyAll':
            objProposal.abvocacyAll = objProposal.abvocacyAll +1;
         break;
      };*/

    }

    $scope.openCommentForm = function(idProp){
       $(".formComment"+idProp).toggle();
      $scope.formComment ={}
    }

    $scope.addComments = function(idProp){
      $("."+idProp).toggle();
    };
})

/*********** CONTROLADORES DEL CRUD COMENTARIOS ***********/

