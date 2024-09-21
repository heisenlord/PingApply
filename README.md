# PINGAPPLY Chrome Extension
## One Click Apply All Jobs ON CDC PORTAL VIT



## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/heisenlord/PingApply.git
   ```
1.2-open vscode and open the pingApply folder make sure you add your mail id and password in popup.js file
2. Open Google Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the cloned folder

## Usage

1. Click the extension icon in the Chrome toolbar
2. Enter your email and password in the popup.js file
3. Now open cdc.vit.ac.in and open extension on right click make sure it pinned and apply over simple.
4. The extension will automatically Apply all jobs that haven't been applied in the portal

   
## Privacy and Security

Your privacy and security are our top priorities. Here's how we protect your information:

- **Local Storage Only**: Your email and password are stored locally on your machine. They are never sent to any external servers.
- **No Remote Access**: Since the extension runs entirely on your local machine, no one else can access your stored credentials.
- **Popup.js Implementation**: The `popup.js` file handles the storage and retrieval of your credentials. Here's a simplified example of how it works:

## How It Works

The extension uses content scripts to interact with web pages. When activated, it performs the following steps:

1. Locates email and password input fields
2. Fills in the provided credentials
3. Looks for "Next" or "Login" buttons
4. Clicks the appropriate button to submit the form

## Code Structure

- `manifest.json`: Extension configuration
- `popup.html`: User interface for entering credentials
- `popup.js`: Handles user input and sends messages to content scripts
- `content.js`: Contains the logic for autofilling and submitting forms

### Message Listener

The content script listens for messages from the popup:

```javascript
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'autofill') {
    autofillAndSubmit(request.email, request.password);
  }
});
```

## Configuration

You can modify the `manifest.json` file to change the extension's permissions or behavior. Be sure to reload the extension in Chrome after making changes.

## Troubleshooting

- If the extension fails to autofill, check if the website's structure matches the selectors used in `content.js`
- Ensure you've granted the necessary permissions to the extension
- Check the console for any error messages

## Security Considerations

- This extension handles sensitive information. Use at your own risk and avoid storing plaintext passwords
- Consider implementing encryption for stored credentials
- Be cautious when using on public or shared computers

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request

Please ensure your code adheres to the existing style and includes appropriate tests.

## License

This project is licensed under the MIT License - see the  file for details.

## Disclaimer

This extension is for educational purposes only. Be aware of the terms of service of the websites you're using it with, as automated form filling might violate their policies.

## Contact

If you have any questions, feel free to reach out to [Nishanth.vercel.app](https://nishanthreddy.vercel.app/) or open an issue in the GitHub repository.

Happy autofilling!
