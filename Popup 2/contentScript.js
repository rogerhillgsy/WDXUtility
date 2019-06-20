chrome.runtime.onMessage.addListener( function(data, sender, sendResponse) {
    var active = document.activeElement;
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
    // var link = data.CRMUrl +"main.aspx?etc=" + data.CRMQuestionOTC + "&id=%7b" + keyId + "%7d&pagetype=entityrecord";

    var link = document.URL.replace( /#.*/,"#/redirect/" + keyId +"/wdx_xdwquestion")
    window.open(link, "_blank");
    sendResponse({data: link, success: true});
    } else {
        sendResponse( {data: "No link to CRM found", success: false} )
    }
});
