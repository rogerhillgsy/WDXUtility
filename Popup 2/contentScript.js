chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    var active = document.activeElement;
    if (active.type == "select-one")    
    {
        var keyId = document.activeElement.parentElement.parentElement.parentElement.parentElement.parentElement.id;
        keyId = keyId.replace( "mee-form-field-control-", "");
    } else {
        var keyId = document.activeElement.parentElement.parentElement.parentElement.parentElement.id;
        keyId = keyId.replace( "mee-form-field-control-", "");
    }
    // var link = "https://quilter365dev.wdx-dev.net/main.aspx?etc=10132&extraqs=%3fetc%3d10131%26id%3d%257b" + keyId + "%257d&newWindow=true&pagetype=entityrecord";
    var link = "https://quilter365dev.wdx-dev.net/main.aspx?etc=10132&extraqs=%3f_gridType%3d10132%26etc%3d10132%26id%3d%257b" + keyId + "%257d%26rskey%3d%257b94C67425-2C9F-41D5-B797-DAE25284BD28%257d&histKey=387963908&newWindow=true&pagetype=entityrecord&rskey=%7b94C67425-2C9F-41D5-B797-DAE25284BD28%7d#940385115";
    window.open(link, "_blank");
    console.log("something happening from the extension :" + request );
    sendResponse({data: "Hello World back!", success: true});
});


console.log("Content Script has kicked off");