var titleID = "fields[title]";
var impactID = "s2id_autogen1";
var statusID = "fields[title]";
var categoryID = "fields[title]";
var firstContactID = "fields[title]";
var ownerID = "fields[title]";
var approverID = "fields[title]";
var resolvedID = "fields[title]";
var commentID = "fields[title]";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log("filling template...");
	if (request.message === "fill_in_template") {
		console.log("test1...");
		console.log(document.getElementById("titleID"));
		document.getElementById(titleID).value = "Test!";
		document.getElementById(impactID).value = "Other";

	}
});