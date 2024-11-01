//don't worry developer won't see ur creds because its locally runs on your machine
const email = 'enter ur email id';
const password='put ur password';



document.getElementById('auto-fill-btn').addEventListener('click', function() {
    
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'autofill', email: email ,password:password});
    });
});
