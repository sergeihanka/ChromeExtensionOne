angular.module('ExtensionApp', []).controller("PageController", function ($scope) {
    $scope.message = "M!";

    //Assign action to button clicked
    document.getElementById("HI").addEventListener("click", function() {
        $scope.message = "BUTTON CLICKED!";
        $scope.$apply();
    });
});


