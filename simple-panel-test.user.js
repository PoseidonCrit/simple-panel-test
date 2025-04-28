// ==UserScript==
// @name         Simple Panel Test (Modular)
// @namespace    http://your-namespace.example.com
// @version      1.2 // New version for modular structure
// @description  A simple test script (modularized) to check panel creation, menu command toggling, and basic input interaction.
// @author       Your Name
// @match        https://ygoprodeck.com/pack-sim/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
//
// @require      https://raw.githubusercontent.com/PoseidonCrit/simple-panel-test/main/src/constants.js
// @require      https://raw.githubusercontent.com/PoseidonCrit/simple-panel-test/main/src/ui-css.js
// @require      https://raw.githubusercontent.com/PoseidonCrit/simple-panel-test/main/src/panel-html.js
// @require      https://raw.githubusercontent.com/PoseidonCrit/simple-panel-test/main/src/panel.js
//
// ==/UserScript==

// This is the main entry point of the script.
// The code from the @require directives will be loaded before this IIFE runs.
(function() {
    'use strict';

    // --- Global State Variables ---
    // These variables are declared here *without* 'let', 'const', or 'var'
    // so they are accessible to functions loaded from the required modules
    // within this same IIFE scope.
    testPanelElement = null; // Reference to the main panel DOM element

    // Note: Other variables like config, undoStack, etc., would also be
    // declared here without 'let', 'const', or 'var' in the full script.


    // --- Run Initialization ---
    // Use a simple DOMContentLoaded listener to wait for the basic page structure
    // before trying to create the panel. This is simpler than waitForElement
    // for this basic test.
    document.addEventListener('DOMContentLoaded', initSimplePanelTest);
    console.log('Simple Panel Test (Modular): DOMContentLoaded listener added.');

    // Note: initSimplePanelTest is defined in src/panel.js,
    // constants are from src/constants.js,
    // addTestPanelCSS is from src/ui-css.js,
    // panelHTML is from src/panel-html.js.
    // These are available in this scope because they are loaded via @require.

})();
