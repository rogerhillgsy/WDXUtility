chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    var active = document.activeElement;
    var crmUrl = request.data;
    // Search back up the dom hierarchy for a node with an id like "mee-form-field-control-<guid>"
    var current = document.activeElement.parentElement;
    var keyId = null;
    while (current != null && keyId == null ) {
        if (!!current.id  && current.id.startsWith("mee-form-field-control-")) {
            keyId = current.id.replace( "mee-form-field-control-", "");    
        }
        current = current.parentElement;
    }
    if ( keyId != null ) {
    var link = crmUrl +"main.aspx?etc=10132&id=%7b" + keyId + "%7d&pagetype=entityrecord";
    window.open(link, "_blank");
    sendResponse({data: link, success: true});
    } else {
        sendResponse( {data: "No link to CRM found", success: false} )
    }
});
