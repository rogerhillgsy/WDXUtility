chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    var active = document.activeElement;
    var crmUrl = request.data;
    if (active.type == "select-one")    
    {
        var keyId = document.activeElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
        keyId = keyId.replace( "mee-form-field-control-", "");
    } else {
        var keyId = document.activeElement.parentElement.parentElement.parentElement.parentElement.id;
        keyId = keyId.replace( "mee-form-field-control-", "");
    }
    var link = crmUrl +"main.aspx?etc=10132&id=%7b" + keyId + "%7d&pagetype=entityrecord";
    window.open(link, "_blank");
    sendResponse({data: link, success: true});
});
