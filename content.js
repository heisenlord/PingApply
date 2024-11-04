
let password = '';

// Sleep
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Autofill and submit form
async function autofillAndSubmit(email) {
    try {
        await autofillEmail(email);
        await clickNextButton();
        const passwordInput = await waitForElement('#password');
        await sleep(1000);
        await autofillPassword(passwordInput);
        
        const loginButton = await waitForElementContainingText('Login');
        await clickButton(loginButton);
        console.log('All steps completed successfully!');
        // await sleep(2000);
        await executeTasks();
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Autofill email input 
async function autofillEmail(email) {
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.value = email;
        const emailInputEvent = new Event('input', { bubbles: true });
        emailInput.dispatchEvent(emailInputEvent);
        console.log('Email field autofilled!');
// document.getElementById('status').innerHTML = 'Email field autofilled!';
    } else {
        throw new Error('Email input field not found.');
    }
}

// Click "Next" button
async function clickNextButton() {
    const nextButton = Array.from(document.querySelectorAll('button, span')).find(el => el.textContent.trim() === 'Next' && el.closest('button'));
    if (nextButton) {
        nextButton.closest('button').click();
        console.log('Clicked the Next button!');
    } else {
        throw new Error('Next button not found.');
    }
}

// Autofill password input 
async function autofillPassword(passwordInput) {
    if (passwordInput) {
        passwordInput.value = password;
        const passwordInputEvent = new Event('input', { bubbles: true });
        passwordInput.dispatchEvent(passwordInputEvent);
        console.log('Password field autofilled!');
    } else {
        throw new Error('Password input field not found.');
    }
}

// Click  button
async function clickButton(button) {
    if (button) {
        button.closest('button').click();
        console.log('Clicked the Login button!');
    } else {
        throw new Error('Login button not found.');
    }
}

// Wait for element to appear
async function waitForElement(selector) {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            const element = document.querySelector(selector);
            if (element) {
                clearInterval(intervalId);
                resolve(element);
            }
        }, 2000);
    });
}

// Wait for element contain's span
async function waitForElementContainingText(text) {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            const element = Array.from(document.querySelectorAll('button, span')).find(el => el.textContent.trim() === text && el.closest('button'));
            if (element) {
                clearInterval(intervalId);
                resolve(element);
            }
        }, 2000);
    });
}

// Check for list items and click if found
async function checkAndClickItems() {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            const listItems = document.querySelectorAll('.ng-star-inserted li');
            if (listItems.length > 0) {
                let foundMatch = false;
                
                listItems.forEach(li => {
                    if (li.innerText.trim().toLowerCase() === 'jobs') {
                        li.click();
                        console.log('Clicked on:', li.className);
                        foundMatch = true;
                    }
                });
                if (foundMatch) {
                    clearInterval(intervalId);
                    console.log('Stopped checking for items.');
                    resolve();
                }
            }
        }, 2000);
    });
}

// Get the text of the previous <div> element
async function getPreviousDivText(elementId) {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            const targetElement = document.getElementById(elementId);
            const previousDivElement = targetElement?.previousElementSibling;

            if (previousDivElement && previousDivElement.tagName.toLowerCase() === 'div') {
                const divText = previousDivElement.innerText.trim();

                if (divText) {
                    console.log('Found div text:', divText);
                    clearInterval(interval);
                    resolve(divText);
                }
            } else {
                console.log('No valid div found or no text yet, checking again in 2 seconds...');
            }
        }, 2000);
    });
}

async function waitForElementsById(elementId) {
    return new Promise((resolve) => {
        const checkInterval = 2000;
        
        const intervalId = setInterval(() => {
            let elementsWithID = document.querySelectorAll(`#${elementId}`);
            
            if (elementsWithID.length > 0) {
                console.log(`Elements found with ID: ${elementId}`);
                clearInterval(intervalId);
                resolve(elementsWithID);
            } else {
                console.log(`No elements found with ID: ${elementId}. Retrying in 2 seconds...`);
            }
        }, checkInterval);
    });
}

// Find and click elements based on ID and text
async function findAndClickElementsWithCheck(elementId, divText) {
    let elementsWithID = await waitForElementsById(elementId);
    let elementsArray = Array.from(elementsWithID);
    let matchingIndex = -1;

    elementsArray.forEach((element, index) => {
        const elementText = element.innerText.trim().toLowerCase();
        const targetText = divText.trim().toLowerCase();

        if (elementText === targetText) {
            matchingIndex = index;
        }
    });

    if (matchingIndex !== -1) {
        let slicedElements = elementsArray.slice(0, matchingIndex).reverse();
        console.log('Sliced elements:', slicedElements);

        for (let idx = 0; idx <= slicedElements.length; idx++) {
            let element = slicedElements[idx];

            if (!element || typeof element.click !== 'function') {
                console.log(`Element ${idx + 1} is not clickable or no longer exists.`);
                continue;
            }

            // await sleep(5000);
            // console.log('Sleep 5s - iteration', idx + 1);

            try {
                elementsWithID = document.querySelectorAll(`#${elementId}`);
                elementsArray = Array.from(elementsWithID);
                slicedElements = elementsArray.slice(0, matchingIndex).reverse();
                element = slicedElements[idx];
                console.log(`Attempting to click on element ${idx + 1} with innerText:`, element.innerText);
                await element.click();
            } catch (error) {
                console.error(`Failed to click element ${idx + 1}:`, error);
                continue;
            }

            await checkButton();
            await checkAndClickItems();
            await sleep(5000);
            // console.log('Slept 5s after checking - iteration', idx + 1);
console.log('c0'+idx+' length '+slicedElements.length);
           

        }

        return true;
    } else {
        console.log('No matching element found for divText:', divText);
        return false;
    }
}

async function enterTextAndConfirm() {
    return new Promise((resolve) => {
        const intervalId = setInterval(async () => {
            const inputElement = document.getElementById('opt-in');
            if (inputElement) {
                inputElement.value = 'Apply';
                const inputEvent = new Event('input', { bubbles: true });
                inputElement.dispatchEvent(inputEvent);
                console.log('Entered "Apply" into the input field!');

                // Await before clicking confirm
                //await new Promise(resolve => setTimeout(resolve, 1000));

                const confirmButton = document.getElementById('ffConfirm');
                if (confirmButton) {
                    confirmButton.removeAttribute('disabled');
                    console.log('Removed disabled attribute from Confirm button.');
                    
                    // Stop the interval before clicking confirm
                    clearInterval(intervalId);
                    console.log('Stopped the interval.');

                    confirmButton.click();
                    console.log('Clicked the Confirm button!');
                    resolve(true);  // Resolve the promise once confirm is clicked
                } else {
                    console.log('Confirm button not found, still checking...');
                    
                }
            } else {
                console.log('Input element not found, still checking...');
                clearInterval(intervalId);
                resolve(true);
            }
        }, 2000);
    });
}




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkButton() {
    return new Promise((resolve) => {
        const intervalId = setInterval(async () => {
            const applyButton = document.querySelector('#ffApply');
            const defaultText = document.querySelector('#desktopProfile');

            if (applyButton) {
                console.log("Apply button found!");
                applyButton.click();
                await sleep(2000);
                await enterTextAndConfirm();
                clearInterval(intervalId);
                resolve(true);
            } else if (defaultText) {
                console.log('Nothing found, likely expired.');
                clearInterval(intervalId);
                resolve(true);
            }
        }, 2000);
    });
}

async function executeTasks() {
    // await sleep(7000); 
    // console.log('Slept for 7 second e-1');

    await checkAndClickItems();
    let divText = await getPreviousDivText('desBadgeIconID');
    // let divText="NVIDIA";
    await findAndClickElementsWithCheck('driveNameID', divText);
    console.log('Item check complete. total process is finish');
}

//executeTasks();

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'autofill') {
        let divSearch=document.getElementById('mycsearch');
        if(divSearch)
        {
            executeTasks();
        }
        else{
        password = request.password;
        autofillAndSubmit(request.email);
        }
    }
});
