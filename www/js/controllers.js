angular.module('starter.controllers', [])

/*********** CONTROLADORES INICIO APLICACION **************/
.controller('AppCtrl', function($scope,LoginSession) {
      $scope.validateLogin = LoginSession.state;
      console.log(LoginSession.state);
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
    $scope.formData={};
    $scope.addValueType = function(objProp,idType){
         switch(idType){
            case 'likeAll':
              ServiProposals.update({id:objProp._id},{likeAll: objProp.likeAll + 1});
           break;
            case 'dislikeAll':
              ServiProposals.update({id:objProp._id},{dislikeAll: objProp.dislikeAll + 1});
             
           break;
           case 'favoriteAll':
              ServiProposals.update({id:objProp._id},{favoriteAll: objProp.favoriteAll + 1});
           break;
          };  
    };


    $scope.openCommentForm = function(idProp){
       $(".formComment"+idProp).toggle();
    }

    $scope.saveComments = function(){
      console.log($scope.formData);
    }

    $scope.viewComments = function(objProp){
      $("."+objProp._id).toggle();
    };
})

/*********** CONTROLADORES DEL CRUD COMENTARIOS ***********/



/*********** CONTROLADORES LOGIN ***********/
.controller('SignUpCtrl', function($scope,ServiUser,$state) {
  $scope.data={
    username:"",
    email:"",
    password:"",
    state:"A",
    positionX:"",
    positionY:"",
    picture:"5722680c2364b69cd0030b7f",
  }
  $scope.signupEmail = function(){
      ServiUser.save($scope.data);
       $state.go('app.login');
       console.log($scope.data);
  }
})

.controller('ProfileCtrl', function($scope) {

})

.controller('LoginCtrl', function($scope,ServiUser,$state,LoginSession) {
  $scope.data ={};

  $scope.loginEmail = function(){
  $scope.message ={};
    ServiUser.validateLogin({username:$scope.data.username,pass:$scope.data.password}, function(message){
          if(message.mensaje === "true"){
              LoginSession.state = true;
              console.log(LoginSession.state);
              //$state.go('app.home');
          }else{
            $scope.message = message;
          }
    }); 
    
  }
})