# PINGAPPLY Chrome Extension

## One-Click Apply for All Jobs on VIT CDC Portal (sorry for late response solved most of the bugs and solving the remaing bug by NOV3 will report everything clean)
## By the way I was thinking of making group PingApply suggestions open(basically it's just if any one ur frnd applies using the pingApply the company will be applied to his friend also and planning of making package restrictions for each of the friend where they can actually set a package restrictions like 7LPA it applies only above it).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/heisenlord/PingApply.git
   ```

2. Open Visual Studio Code and navigate to the PingApply folder.

3. Open the `popup.js` file and add your email and password.

4. Open Google Chrome and navigate to `chrome://extensions/`

5. Enable "Developer mode" in the top right corner.

6. Click "Load unpacked" and select the cloned PingApply folder.
7. You are now happy to use on cdc portal.

### Usage

1. Ensure the extension is pinned to your Chrome toolbar.

2. Open [cdc.vit.ac.in](https://cdc.vit.ac.in) in your browser.

3. Click the PINGAPPLY extension icon in the Chrome toolbar.

4. The extension will automatically apply to all jobs that haven't been applied to in the portal.

### Privacy and Security

Your privacy and security are our top priorities. Here's how we protect your information:

- **Local Storage Only**: Your email and password are stored locally on your machine. They are never sent to any external servers.
- **No Remote Access**: The extension runs entirely on your local machine, so no one else can access your stored credentials.
- **Popup.js Implementation**: The `popup.js` file handles the storage and retrieval of your credentials securely.

### How It Works

The extension uses content scripts to interact with web pages. When activated, it performs the following steps:

1. Locates email and password input fields
2. Fills in the provided credentials
3. Looks for "Next" or "Login" buttons
4. Clicks the appropriate button to submit the form

### Code Structure

- `manifest.json`: Extension configuration
- `popup.html`: User interface for entering credentials
- `popup.js`: Handles user input and sends messages to content scripts
- `content.js`: Contains the logic for autofilling and submitting forms

#### Message Listener

The content script listens for messages from the popup:

```javascript
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'autofill') {
    autofillAndSubmit(request.email, request.password);
  }
});
```

### Configuration

You can modify the `manifest.json` file to change the extension's permissions or behavior. Be sure to reload the extension in Chrome after making changes.

### Troubleshooting

- If the extension fails to autofill, check if the website's structure matches the selectors used in `content.js`
- Ensure you've granted the necessary permissions to the extension
- Check the console for any error messages

### Security Considerations

- This extension handles sensitive information. Use at your own risk and avoid storing plaintext passwords.
- Consider implementing encryption for stored credentials.
- Be cautious when using on public or shared computers.

### Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request

Please ensure your code adheres to the existing style and includes appropriate tests.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Disclaimer

This extension is for educational purposes only. Be aware of the terms of service of the websites you're using it with, as automated form filling might violate their policies.

### Contact

If you have any questions, feel free to reach out to [Nishanth](https://nishanthreddy.vercel.app/) or open an issue in the GitHub repository.

Happy autofilling!
