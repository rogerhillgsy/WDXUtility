var contextMenuItem = {
    "id" : "editQuestion",
    "title" : "Edit XDW Question",
    "contexts" : ["selection"]
};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener( function (clickData) {
    if (clickData.menuItemId == "editQuestion" && clickData.selectionText) {
        console.log("Edit XDW Question");
    }
});