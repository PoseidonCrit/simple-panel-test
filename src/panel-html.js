// This file contains the HTML structure for the Simple Panel Test panel as a string.
// Depends on: Constants (TEST_PANEL_ID - defined in constants.js)

// The HTML structure for the panel.
// Note: The ID is applied to the outer div when the element is created in panel.js.
const panelHTML = `
    <span class="close-btn">×</span>
    <h4>Test Panel</h4>
    <p>This is a simple test panel.</p>

    <div class="input-group">
        <label for="test-number-input">Enter a Number:</label>
        <input type="number" id="test-number-input" value="123" min="0">
    </div>

    <button id="read-input-btn">Read Input</button>
`;

// Note: This file defines the panelHTML constant string. It depends on the
// TEST_PANEL_ID constant, but the ID is applied *after* creating the element
// in panel.js, so it only needs the constant definition available in the scope
// where the element is created. constants.js should be required before panel.js.
