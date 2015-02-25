var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider) {
	$routeProvider.
	when("/", {
		templateUrl: "partials/page1.html",
	}).
	when("/page2", {
		templateUrl: "partials/page2.html",
		controller: "CharController"
	}).
	when("/page3", {
		templateUrl: "partials/page3.html",
		controller: "CharController"
	}).
	when("/page4", {
		templateUrl: "partials/page4.html",
		controller: "PersonController"
	}).
	when("/page5", {
		templateUrl: "partials/page5.html",
		controller: "CharController"
	}).
	otherwise({
		redirectTo: "/"
	});
	
}]);