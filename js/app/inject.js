// my.luther form id's 
var subjectBox = "#LIST_VAR1_";
var courseNumberBox = "#LIST_VAR3_";
var sectionNumberBox = "#LIST_VAR4_";


// Listen for message to register schedule
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log("register_schedule...");
	if (request.message === "test1") {
		console.log("test1...");
		console.log(document.getElementById("fields[title]"));
		document.getElementById("fields[title]").value = "TEST!";
		console.log(document.getElementById("fields[title]"));
	}
});