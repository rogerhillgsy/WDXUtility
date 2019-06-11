let page = document.getElementById('CRMUrl');
let button = document.getElementById('save');

function constructTextField() {
  let urlField = document.createElement('input');
  urlField.setAttribute("type", "text");
  urlField.style.width="80%";

  chrome.storage.sync.get("CRMUrl", function(data) {
    urlField.value = data.CRMUrl;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({CRMUrl : urlField.value}, function() {
        console.log("CRM URL is " + urlField.value);
        statusbar.value = "Updated CRM Url"
      })
    });
    });
    page.appendChild(urlField);
}
constructTextField();

