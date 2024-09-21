
const email = 'nishanthreddy4566@gmail.com';
const password='9491700844@Mn';


document.getElementById('auto-fill-btn').addEventListener('click', function() {
    
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'autofill', email: email ,password:password});
    });
});
