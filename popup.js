
const email = 'Enter you emailId';
const password='Enter your password';


document.getElementById('auto-fill-btn').addEventListener('click', function() {
    
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'autofill', email: email ,password:password});
    });
});
