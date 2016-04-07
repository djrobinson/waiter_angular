angular.module('earnApp')
  .factory('mealDataService', function($http){
    console.log("Data Service!!!");
    var meals = [];
    var totals = {
      tipTotal: 0,
      mealCount: 0,
      tipCount: 0,
      avgTip: 0
    };

    return {
         getMeals: getMeals,
         getCumulative: getCumulative,
         addMeal: addMeal,
         resetAll: resetAll,
         getOneMeal: getOneMeal
    };

    function getMeals(){
      return meals;
    }

    function getCumulative(){
      return totals;
    }
    /*Garbage logic below, but just wanted to get it done. It took me a while
    to realize that base was coming through as a string, so I hacked through the calcs*/
    function addMeal(base, tax, tip){
      var taxAmt = base * tax;
      var tipAmt = base * tip;
      var subTotal = parseInt(base) + taxAmt;
      var total = subTotal + tipAmt;
      meals.push({
        base: parseInt(base),
        tax: taxAmt,
        tip: tipAmt,
        subTotal: subTotal,
        total: total
      });
      totals.tipTotal += tipAmt;
      totals.mealCount++;
      totals.tipCount += 1;
      totals.avgTip = ((totals.avgTip * (totals.tipCount -1)) + tipAmt) / totals.tipCount;
      console.log(meals);
      console.log(totals);
    }

    function resetAll(){
      meals = [];
      totals = {
        tipTotal: 0,
        mealCount: 0,
        avgTip: 0
      };
    }

    function getOneMeal(id){
      return meals[id];
    }


  });
