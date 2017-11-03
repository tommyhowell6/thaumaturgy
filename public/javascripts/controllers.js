var app = angular.module("Alchemy", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/game", {
        templateUrl : "game.html",
        controller : "gameCtrl"
    })
    .when("/results", {
        templateUrl : "results.html",
        controller : "resultsCtrl"
    })
    .when("/scoreboard", {
      templateUrl : "scoreboard.html",
      controller : "scoreboardCtrl"
    })
});

app.controller('mainCtrl', function($scope) {

});