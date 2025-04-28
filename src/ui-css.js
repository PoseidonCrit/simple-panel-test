// This file contains the CSS styles for the Simple Panel Test panel.
// It uses GM_addStyle to inject the CSS into the page.
// Depends on: GM_addStyle (granted in main script), Constants (TEST_PANEL_ID - defined in constants.js)

/**
 * Injects the CSS styles for the Simple Panel Test UI into the document head.
 * Depends on: GM_addStyle, TEST_PANEL_ID
 */
function addTestPanelCSS() {
    GM_addStyle(`
        #${TEST_PANEL_ID} {
            position: fixed;
            top: 50px; /* Example position */
            right: 50px; /* Example position */
            width: 220px; /* Slightly wider to accommodate new elements */
            background-color: rgba(255, 255, 255, 0.95);
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            z-index: 99999; /* High z-index */
            font-family: sans-serif;
            color: #333;
            padding: 15px;
            transition: opacity 0.3s ease-in-out;
            display: flex; /* Use flexbox for internal layout */
            flex-direction: column;
            gap: 10px; /* Space out elements */
        }

        #${TEST_PANEL_ID}.hidden {
            opacity: 0;
            pointer-events: none; /* Prevent interaction when hidden */
        }

        #${TEST_PANEL_ID} h4 {
            margin-top: 0;
            margin-bottom: 5px; /* Adjusted margin */
            font-size: 16px;
            color: #555;
            border-bottom: 1px solid #eee; /* Add a subtle separator */
            padding-bottom: 5px;
        }

        #${TEST_PANEL_ID} .close-btn {
            position: absolute;
            top: 5px;
            right: 10px;
            font-size: 20px;
            cursor: pointer;
            color: #aaa;
            transition: color 0.2s ease;
        }
        #${TEST_PANEL_ID} .close-btn:hover {
            color: #777;
        }

        /* Styles for the new input demo elements */
        #${TEST_PANEL_ID} .input-group {
            display: flex;
            flex-direction: column;
            gap: 5px; /* Space between label and input */
        }

        #${TEST_PANEL_ID} label {
            font-size: 13px;
            color: #444;
            font-weight: bold;
        }

        #${TEST_PANEL_ID} input[type="number"] {
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
            width: 100%; /* Make input fill container */
            box-sizing: border-box; /* Include padding and border in element's total width */
        }

         #${TEST_PANEL_ID} button {
             padding: 10px 15px;
             background-color: #5e5cff;
             color: white;
             border: none;
             border-radius: 4px;
             cursor: pointer;
             font-size: 14px;
             transition: background-color 0.2s ease;
         }

         #${TEST_PANEL_ID} button:hover {
              background-color: #4a48d8;
         }
    `);
}

// Note: This file defines the addTestPanelCSS function. It requires GM_addStyle
// (granted in the main script) and the TEST_PANEL_ID constant.
// Ensure constants.js is required before ui-css.js.
