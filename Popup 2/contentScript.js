chrome.runtime.onMessage.addListener(function (data, sender, sendResponse) {
    // use the element under the mouse, or failing that the active element as the starting point
    var current = document.activeElement.parentElement;
    var type = "wdx_xdwquestion";
    if (elementUnderCursor != null) {
        current = elementUnderCursor.parentElement;
    }

    // Search back up the dom hierarchy for a node with an id like "mee-form-field-control-<guid>"
    var keyId = null;
    while (current != null && keyId == null) {
        if (!!current.id && current.id.startsWith("mee-form-field-control-")) {
            keyId = current.id.replace("mee-form-field-control-", "");
        }
        if (!!current.id && current.id.match( /^[\da-f]{8}\-[\da-f]{4}\-[\da-f]{4}\-[\da-f]{4}\-[\da-f]{12}$/ )) { // Matches Guid like:   "ddd790b6-b04c-e911-80e0-d4ae52c70f51")) {
            keyId = current.id;
            type = "wdx_xdwcategory";
        }

        current = current.parentElement;
    }
    if (keyId != null) {

        var link = document.URL.replace(/#.*/, "#/redirect/" + keyId + "/" + type )
        window.open(link, "_blank");
        sendResponse({ data: link, success: true });
    } else {
        sendResponse({ data: "No link to CRM found", success: false })
    }
});

var elementUnderCursor;

document.addEventListener("contextmenu", function (e) {
    elementUnderCursor = document.elementFromPoint(e.x, e.y);
})
