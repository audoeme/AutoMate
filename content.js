chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === 'fillForm') {
    const nameField = document.querySelector('input[name="name"]');
    const emailField = document.querySelector('input[name="email"]');

    if (nameField) {
      nameField.value = request.name;
    }
    
    if (emailField) {
      emailField.value = request.email;
    }
  }
});
