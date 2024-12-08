document.getElementById('fillForm').addEventListener('click', function() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: 'fillForm',
      name: name,
      email: email
    });
  });
});
