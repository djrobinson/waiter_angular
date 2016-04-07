angular.module('earnApp')
  .controller('ChargeCtrl',['$scope', 'mealDataService', function($scope, mealDataService){
    var mealCounter = 0;
    var meals = mealDataService.getMeals;
    $scope.mealCounter = mealCounter+1;
    $scope.meal = mealDataService.getOneMeal(mealCounter);
    $scope.nextMeal = function(){
      if (mealCounter <= meals.length){
        mealCounter++;
      } else {
        mealCounter = 0;
      }
      $scope.mealCounter = mealCounter+1;

      $scope.meal = mealDataService.getOneMeal(mealCounter);
    };
    $scope.lastMeal = function(){
      if (mealCounter > 0){
        mealCounter--;
      } else {
        mealCounter = meals.length;
      }
      $scope.mealCounter = mealCounter+1;
      $scope.meal = mealDataService.getOneMeal(mealCounter);
    };
    console.log($scope.meal);
  }]);