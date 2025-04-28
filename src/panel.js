// This file contains the JavaScript logic for creating, managing, and interacting with the Simple Panel Test panel.
// Depends on: Global State (testPanelElement - declared in main script),
// Constants (TEST_PANEL_ID, VISIBILITY_CONFIG_KEY, DEFAULT_VISIBLE - defined in constants.js),
// GM_setValue, GM_getValue, GM_registerMenuCommand (granted in main script),
// addTestPanelCSS (defined in ui-css.js),
// panelHTML (defined in panel-html.js)


/**
 * Creates the main panel element and appends it to the document body.
 * Sets initial position and visibility based on the current configuration.
 * Adds event listeners to panel controls (close button, input button).
 * @returns {Element|null} The created panel element or null if creation failed.
 * Depends on: Global State (testPanelElement), Constants (TEST_PANEL_ID),
 * panelHTML, setPanelVisibility, GM_getValue, GM_setValue
 */
function createTestPanel() {
    if (testPanelElement) {
        console.log('Simple Panel Test (Modular): Panel already exists.');
        return testPanelElement;
    }

    console.log('Simple Panel Test (Modular): Creating panel element...');
    // Create the main panel div element.
    testPanelElement = document.createElement('div');
    testPanelElement.id = TEST_PANEL_ID; // Assign the ID from constants.js

    // Set the inner HTML using the string from panel-html.js.
    testPanelElement.innerHTML = panelHTML; // panelHTML is from src/panel-html.js

    // --- Add Event Listeners to Panel Controls ---

    // Add close button functionality.
    const closeButton = testPanelElement.querySelector('.close-btn');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            setPanelVisibility(false); // Hide the panel (setPanelVisibility defined below)
        });
        console.log('Simple Panel Test (Modular): Close button listener added.');
    } else {
        console.error('Simple Panel Test (Modular): Close button element not found after panel creation.');
    }


    // Add event listener for the "Read Input" button.
    const readInputButton = testPanelElement.querySelector('#read-input-btn');
    const numberInput = testPanelElement.querySelector('#test-number-input');

    if (readInputButton && numberInput) {
        readInputButton.addEventListener('click', () => {
            const value = numberInput.value;
            console.log('Simple Panel Test (Modular): Input value read:', value);
            alert('Input value: ' + value); // Use alert for simple feedback
        });
        console.log('Simple Panel Test (Modular): Read Input button listener added.');
    } else {
         console.error('Simple Panel Test (Modular): Input or button element not found after panel creation.');
    }

    // Append the created panel element to the document body.
    document.body.appendChild(testPanelElement);
    console.log('Simple Panel Test (Modular): Panel created and added to DOM.');
    return testPanelElement;
}

/**
 * Retrieves the panel's visibility state from Tampermonkey storage.
 * @returns {boolean} The saved visibility state, or DEFAULT_VISIBLE if not found.
 * Depends on: GM_getValue (granted in main script), Constants (VISIBILITY_CONFIG_KEY, DEFAULT_VISIBLE)
 */
function getPanelVisibility() {
    // Retrieve visibility state from storage, default to DEFAULT_VISIBLE if storage value is null or undefined.
    // GM_getValue provides the default value if the key doesn't exist.
    return GM_getValue(VISIBILITY_CONFIG_KEY, DEFAULT_VISIBLE);
}

/**
 * Sets the panel's visibility (shows or hides it) and saves the state to storage.
 * @param {boolean} isVisible - True to show the panel, false to hide it.
 * Depends on: Global State (testPanelElement), GM_setValue (granted in main script),
 * Constants (VISIBILITY_CONFIG_KEY)
 */
function setPanelVisibility(isVisible) {
    if (!testPanelElement) {
        console.error('Simple Panel Test (Modular): Panel element not found to set visibility.');
        return;
    }

    if (isVisible) {
        testPanelElement.classList.remove('hidden');
        console.log('Simple Panel Test (Modular): Panel shown.');
    } else {
        testPanelElement.classList.add('hidden');
        console.log('Simple Panel Test (Modular): Panel hidden.');
    }

    // Save the new visibility state to Tampermonkey storage.
    GM_setValue(VISIBILITY_CONFIG_KEY, isVisible);
    console.log('Simple Panel Test (Modular): Panel visibility state saved:', isVisible);
}


/**
 * Initializes the simple panel test script.
 * Injects CSS, creates the panel, sets initial visibility, and registers the menu command.
 * Depends on: addTestPanelCSS, createTestPanel, getPanelVisibility, setPanelVisibility,
 * GM_registerMenuCommand (granted in main script), Global State (testPanelElement)
 */
function initSimplePanelTest() {
    console.log('Simple Panel Test (Modular): Initializing...');

    // 1. Inject CSS styles.
    addTestPanelCSS(); // addTestPanelCSS is from src/ui-css.js

    // 2. Create the panel element and add it to the DOM.
    const panel = createTestPanel(); // createTestPanel defined above
    if (!panel) {
        console.error('Simple Panel Test (Modular): Initialization failed - could not create panel.');
        return; // Stop initialization if panel creation failed.
    }

    // 3. Set the initial visibility of the panel based on the saved state.
    const isVisible = getPanelVisibility(); // getPanelVisibility defined above
    setPanelVisibility(isVisible); // setPanelVisibility defined above

    // 4. Register the Tampermonkey menu command to toggle panel visibility.
    console.log('Simple Panel Test (Modular): Checking for GM_registerMenuCommand...');
    if (typeof GM_registerMenuCommand !== 'undefined') {
        console.log('Simple Panel Test (Modular): GM_registerMenuCommand available, registering menu command...');
        GM_registerMenuCommand("Toggle Simple Panel", () => {
            console.log('Simple Panel Test (Modular): Menu command triggered.');
            // Get the current visibility state and set the opposite.
            const currentVisibility = getPanelVisibility();
            setPanelVisibility(!currentVisibility);
        });
         console.log('Simple Panel Test (Modular): Menu command registered.');
    } else {
        console.warn('Simple Panel Test (Modular): GM_registerMenuCommand not available.');
    }

    console.log('Simple Panel Test (Modular): Initialization complete.');
}

// Note: This file defines the core panel logic functions and the main initialization function.
// It depends on global state (testPanelElement) and functions/constants from other modules.
// Ensure dependencies (constants.js, ui-css.js, panel-html.js) are required before panel.js.
