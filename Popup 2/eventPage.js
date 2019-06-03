var contextMenuItem = {
    "id" : "editQuestion",
    "title" : "Edit XDW Question",
    "contexts" : ["all"]
};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener( function (clickData, tabs) {
    if (clickData.menuItemId == "editQuestion" && clickData.selectionText) {
        console.log("Edit XDW Question");
    }

    chrome.tabs.query({"active": true,  "currentWindow": true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {data: "Hello"}, function(response) {
            if ( !!response && response.success ) {
            console.log('success ' + response.data);
            } else {
                console.log('Failed')
                debugger;
            }
        });
    });
});
