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
        console.log("Edit XDW Question");
        chrome.tabs.query({ "active": true, "currentWindow": true }, function (tabs) {
            if (tabs.length > 0 && tabs[0].url.match(urlMatch) != null) {
                chrome.storage.sync.get(["CRMUrl","CRMQuestionOTC"], function (data) {
                    if (data == null) {
                        data = {};
                    }
                    if (!data.CRMUrl) {
                        data.CRMUrl = crmUrl;
                    }
                    if ( !data.CRMQuestionOTC) {
                        data.CRMQuestionOTC = crmOtc;
                    }
                    console.log("CrmUrl is [ CRMUrl : " + data.CRMUrl + "," + data.CRMQuestionOTC + "]");
                    chrome.tabs.sendMessage(tabs[0].id, data, function (response) {
                        if (!!response && response.success) {
                            console.log('success - opened link: ' + response.data);
                        } else {
                            alert("Could not open related XDW Question ")
                        }
                    });
                });
            }
        });
    }
});

chrome.runtime.onInstalled.addListener(function () {
    var defaultCrmUrl = "https://quilter365dev.wdx-dev.net/";
    var defaultConfig = { "https://web3658.wdx-dev.net:8009/quilter365dev_Portal2/" : defaultCrmUrl};
    chrome.storage.sync.get("CRMUrl", function (data) {
        if (!data || !data.CRMUrl) {
            chrome.storage.sync.set({ CRMUrl: crmUrl, crmUrls : defaultConfig },
                function () {
                    console.log("Set URL to " + crmUrl);
                });
        }
    });
})