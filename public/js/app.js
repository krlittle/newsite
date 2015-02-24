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
	otherwise({
		redirectTo: "/"
	});
	
}]);