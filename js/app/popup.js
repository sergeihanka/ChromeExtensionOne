angular.module('ExtensionApp', []).controller("PageController", function ($scope) {
    $scope.message = "M!";

	// Action when 'Register Schedule' button is clicked
	document.getElementById('HI').addEventListener('click', function() {

		$scope.message = "BUTTON CLICKED!";
		$scope.$apply();

		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {"message": "fill_in_template"});
		});
	}, false);
});