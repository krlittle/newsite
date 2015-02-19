function exController($scope) {
    $scope.ex = {
        firstName: "Charles",
        lastName: "Xavier",
     };
     $scope.fullName = function() {
         var x;
         x = $scope.ex; 
         return x.firstName + " " + x.lastName;
     };
}