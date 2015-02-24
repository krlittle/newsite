myApp.controller("CharController", ["$scope", "$http", function ($scope, $http) {
    $scope.char = {
        name: "Farmform",
        realm: "Illidan",
        terminal: "illidan/0/96078336-avatar.jpg"
    };

    $scope.getChar = function() {
        var x = $scope.char;
        var url = "http://us.battle.net/api/wow/character/" + x.realm + "/" + x.name + "?jsonp=JSON_CALLBACK";
        $http.jsonp(url)
                .success(function(data) {
                    $scope.data = data;
                    $scope.name = data.name;
                    $scope.realm = data.realm;
                    $scope.thumbnail = data.thumbnail;
                })
                .error(function(data) {
                    $scope.data = "Request failed";
                });
    };
    
    $scope.getChar();
}]);