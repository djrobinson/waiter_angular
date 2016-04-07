angular.module('earnApp')
  .controller('EarningCtrl',['$scope','mealDataService', function($scope, mealDataService){
    console.log('alksjdflksjdf');
    $scope.totals = mealDataService.getCumulative();

  }]);