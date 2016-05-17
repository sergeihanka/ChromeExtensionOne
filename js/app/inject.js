var titleID = "fields[title]";

// Listen for message to register schedule
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log("register_schedule...");
	if (request.message === "test1") {
		console.log("test1...");
		console.log(document.getElementById(titleID));
		document.getElementById(titleID).value = "TEST!";
	}
});