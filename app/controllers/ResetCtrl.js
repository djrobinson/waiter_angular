angular.module('earnApp')
  .controller('ResetCtrl',['$scope','mealDataService', function($scope, mealDataService){
    console.log('alksjdflksjdf');
    $scope.reset = function(){
      mealDataService.resetAll();
      window.location = '/';
    };
  }]);