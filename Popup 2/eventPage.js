var contextMenuItem = {
    "id" : "editQuestion",
    "title" : "Edit XDW Question",
    "contexts" : ["all"]
};
chrome.contextMenus.create(contextMenuItem);
var crmUrl = "https://quilter365dev.wdx-dev.net/"; // main.aspx?etc=10132&id=%7b71a6ace7-6acd-e811-80db-d4ae52c70f51%7d&pagetype=entityrecord

chrome.storage.sync.get("CRMUrl", function(data) {
    crmUrl = data.CRMUrl;
    console.log("CrmUrl is " + data);
})

chrome.contextMenus.onClicked.addListener( function (clickData, tabs) {
    if (clickData.menuItemId == "editQuestion" && clickData.selectionText) {
        console.log("Edit XDW Question");
    }   
    chrome.tabs.query({"active": true,  "currentWindow": true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {data: crmUrl }, function(response) {
            if ( !!response && response.success ) {
            console.log('success - opened link: ' + response.data);
            } else {
                alert("Could not open related XDW Question " )               
            }
        });
    });
});

chrome.runtime.onInstalled.addListener( function() {
    var crmUrl = "https://quilter365dev.wdx-dev.net/";
    chrome.storage.sync.set({CRMUrl : crmUrl},
    function(){
        console.log("Set URL to " + crmUrl);
    });
})