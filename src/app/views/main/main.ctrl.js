app.controller('MainCtrl', function($scope, $uibModal, $document) {
  
  $scope.openModal = function(type) {

    console.log(type + 'Template.html');

    $uibModal.open({
      templateUrl: 'registerTemplate.html'
    });

  }

});