let page = document.getElementById('CRMUrlDiv');

function constructTextField() {
  let urlField = document.createElement('input');
  urlField.setAttribute("type", "text");

  let button  = document.createElement('button');
  button.title = "Update CRM URL";

  chrome.storage.sync.get("CRMUrl", function(data) {
    urlField.value = data;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({CRMUrl : urlField.value}, function() {
        console.log("CRM URL is " + urlField.value);
        statusbar.value = "Updated CRM Url"
      })
    });
    });
    page.appendChild(CRMUrl);
    page.appendChild(button);
}
constructTextField();

