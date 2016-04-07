angular.module('earnApp', ['ngRoute'])
  .config(function($routeProvider){
    console.log("App running!");
    $routeProvider
    .when('/details', {
      templateUrl: 'app/views/details.html',
      controller: 'DetailCtrl'
    })
    .when('/charges', {
      templateUrl: 'app/views/charges.html',
      controller: 'ChargeCtrl'
    })
    .when('/earnings', {
      templateUrl: 'app/views/earnings.html',
      controller: 'EarningCtrl'
    })
    .otherwise('/details');
  });