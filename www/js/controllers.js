angular.module('starter.controllers', [])

/*********** CONTROLADORES INICIO APLICACION **************/
.controller('AppCtrl', function($scope) {

})

.controller('HomeCtrl', function($scope,ServiTaxonomies,ServiProposals) {
    $scope.list = ServiTaxonomies.query();
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
      uid:'2',
      column:'1',
      fbid:'571e60e579432ebe9dc82e20',
      fhid:'571e5fc079432ebe9dc82e19',
    };
    $scope.columns = [
      {value:1},{value:2},{value:3},{value:4},{value:5},{value:6},
      {value:7},{value:8},{value:9},{value:10},{value:11},{value:12}
      ];
    
    $scope.saveTaxonomy = function(){
       ServiTaxonomies.save($scope.formData);
       console.log($scope.formData);
        $state.go('app.listTaxonomies');
    }

})

.controller('TaxUpdCtrl', function ($scope,ServiTaxonomies,$stateParams,$state) {
    $scope.formData = ServiTaxonomies.get({id:$stateParams.id});
     $scope.columns = [
      {value:1},{value:2},{value:3},{value:4},{value:5},{value:6},
      {value:7},{value:8},{value:9},{value:10},{value:11},{value:12}
      ];
    $scope.saveTaxonomy= function(){
      objTaxonomia = $scope.formData;
      ServiTaxonomies.update({id:$stateParams.id},{
        name:$scope.formData.name,
        description: $scope.formData.description,
        uid: $scope.formData.uid,
        column: $scope.formData.column,
        fbid:$scope.formData.fbid,
        fhid:$scope.formData.fhid,
      });
       $state.go('app.listTaxonomies');
    }
  
})

/*********** CONTROLADORES DEL CRUD PROPUESTAS ***********/
.controller('ProSaveCtrl',function($scope,ServiProposals,ServiTaxonomies,$state){
    $scope.formData = {
      name: "",
      description: "",
      state: "",
      visitsAll: 0,
      likeAll: 0,
      dislikeAll: 0,
      shareAll: 0,
      favoriteAll: 0,
      abvocacyAll: 0,
      disagreementAll: 0,
      neutralAll: 0,
      positionX:"123123",
      positionY:"54645645",
      tid:""
    };
    $scope.list = ServiTaxonomies.query();

     $scope.saveProposal= function(){

       ServiProposals.save($scope.formData);
       $state.go('app.listProposal');
       console.log($scope.formData);
    }

})
.controller('ProUpdCtrl', function($scope,ServiProposals,$stateParams,$state,ServiTaxonomies){
   $scope.formData = ServiProposals.get({id:$stateParams.id});
   $scope.list = ServiTaxonomies.query();
    $scope.saveProposal= function(){
      objProposal = $scope.formData;
      ServiProposals.update({id:$stateParams.id},{
        name:$scope.formData.name,
        description: $scope.formData.description,
        tid:$scope.formData.tid,
        state: $scope.formData.state,
        visitsAll: $scope.formData.visitsAll,
        likeAll: $scope.formData.likeAll,
        dislikeAll: $scope.formData.dislikeAll,
        shareAll: $scope.formData.shareAll,
        favoriteAll: $scope.formData.favoriteAll,
        abvocacyAll: $scope.formData.abvocacyAll,
        disagreementAll: $scope.formData.disagreementAll,
        neutralAll: $scope.formData.neutralAll,
        positionX:$scope.formData.positionX,
        positionY:$scope.formData.positionY,
        create:$scope.formData.create,
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
.controller('ListPropTaxCtrl', function($scope,ServiProposals,ServiComments,$stateParams) {
    //$scope.taxo = $stateParams.id;  /* Pasar datos  al controlador usamos $stateParams*/
    $scope.lists = ServiProposals.listProposalByTaxonomy({id:$stateParams.id});
    $scope.addValueType = function(objProp,idType){
        //alert("id: "+idProp+" type:"+idType);
        
        
       /* $scope.campo ={};
        ServiProposals.get({id:idProp}, function(dato){
             switch(idType){
                  case 'likeAll':
                    $scope.campo = {likeAll: dato.likeAll + 1} ;
                 break;
                  case 'dislikeAll':
                   $scope.campo = {dislikeAll: dato.dislikeAll + 1} ;
                   
                 break;
                 case 'favoriteAll':
                   $scope.campo = {favoriteAll: dato.favoriteAll + 1} ;
                   
                 break;
                 case 'visitsAll':
                    $scope.campo = {visitsAll: dato.visitsAll + 1} ;
                    
                 break;
                 case 'shareAll':
                   $scope.campo = {shareAll: dato.shareAll+ 1} ;
                    
                 break;
              };
             ServiProposals.update({id:idProp},$scope.campo);
        });*/
        
         
    };

    $scope.openCommentForm = function(idProp){
       $(".formComment"+idProp).toggle();
      $scope.formComment ={}
    }

    $scope.addComments = function(idProp,objProp){
      $("."+idProp).toggle();
      console.log(objProp._id);
    };
})

/*********** CONTROLADORES DEL CRUD COMENTARIOS ***********/

