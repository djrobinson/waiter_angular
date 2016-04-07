angular.module('earnApp')
  .controller('DetailCtrl',['$scope', 'mealDataService', function($scope, mealDataService){
      $scope.addMeal = function(){
        var base = $scope.mealData.base;
        var tax = $scope.mealData.tax;
        var tip = $scope.mealData.tip;
        mealDataService.addMeal(base, tax, tip);
        $scope.mealData = {};
      };

  }]);