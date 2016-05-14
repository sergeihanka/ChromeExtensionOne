angular.module('ExtensionApp', []).controller("PageController", function ($scope) {
    $scope.message = "M!";

    var title = document.getElementById("#fields[title]");
    var status = "#s2id_fields[status_id]";

    //Assign action to button clicked
    document.getElementById("HI").addEventListener("click", function () {        
        $scope.message = "BUTTON CLICKED!";
        $scope.$apply();
    });
});