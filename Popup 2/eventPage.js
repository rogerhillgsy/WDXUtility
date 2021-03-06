var contextMenuItem = {
    "id": "editQuestion",
    "title": "Edit XDW Question",
    "contexts": ["all"]
};
chrome.contextMenus.create(contextMenuItem);
var crmUrl = "https://quilter365dev.wdx-dev.net/"; // main.aspx?etc=10132&id=%7b71a6ace7-6acd-e811-80db-d4ae52c70f51%7d&pagetype=entityrecord
var crmOtc = "10132";

chrome.contextMenus.onClicked.addListener(function (clickData, tabs) {
    if (clickData.menuItemId == "editQuestion") {
        var urlMatch = /^(http:\/\/localhost|https:\/\/.*?wdx-dev.net.*?\/\#\/)/;
        chrome.tabs.query({ "active": true, "currentWindow": true }, function (tabs) {
            if (tabs.length > 0 && tabs[0].url.match(urlMatch) != null) {
                chrome.tabs.sendMessage(tabs[0].id, "openQuestion", function (response) {
                    if (!!response && response.success) {
                        console.log('success - opened link: ' + response.data);
                    } else {
                        alert("Could not open related XDW Question ")
                    }
                });
            }
        });
    }
});