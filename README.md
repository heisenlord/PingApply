# Auto-Fill Chrome Extension

This Chrome extension automates filling out and submitting login forms by autofilling email and password fields and clicking buttons like "Next" and "Login."

## Features

- Autofills email and password fields
- Clicks "Next" and "Login" buttons automatically
- Manages delays to ensure elements are ready

## Prerequisites

- Google Chrome browser
- Basic knowledge of Chrome extensions

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Open Google Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the cloned folder

## Usage

1. Click the extension icon in the Chrome toolbar
2. Enter your email and password in the popup
3. Navigate to the login page you want to autofill
4. The extension will automatically fill in the form and attempt to submit it

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

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Disclaimer

This extension is for educational purposes only. Be aware of the terms of service of the websites you're using it with, as automated form filling might violate their policies.

## Contact

If you have any questions, feel free to reach out to [your-email@example.com](mailto:your-email@example.com) or open an issue in the GitHub repository.

Happy autofilling!
