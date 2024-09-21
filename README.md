# Auto-Fill Chrome Extension

This Chrome extension automates filling out and submitting login forms by autofilling email and password fields and clicking buttons like "Next" and "Login."

## Features
- Autofills email and password fields.
- Clicks "Next" and "Login" buttons automatically.
- Manages delays to ensure elements are ready.

## Prerequisites
- Google Chrome browser
- Basic knowledge of Chrome extensions

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
Go to chrome://extensions/ in Chrome.
Enable Developer Mode.
Click "Load unpacked" and select the cloned folder.
Usage
Click the extension icon.
Enter your email and password.
The extension autofills and submits the form automatically.
Message Listener
To trigger autofill:

javascript
Copy code
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'autofill') {
        autofillAndSubmit(request.email, request.password);
    }
});
Contribution
This project is open-source! Contributions are welcome—feel free to submit pull requests or report issues!

typescript
Copy code

You can save this as `README.md` in your repository. Let me know if you need any more modifications!