// ==UserScript==
// @name         Simple Panel Test (Modular)
// @namespace    http://your-namespace.example.com
// @version      1.5 // Incrementing version for this fix
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

// --- Global State Variables ---
// Declare these variables using 'var' at the VERY TOP LEVEL of the script,
// OUTSIDE of any function or IIFE. This ensures they are in the scope
// accessible to all @require'd files when Tampermonkey concatenates and runs them.
var testPanelElement = null; // Reference to the main panel DOM element

// Note: In the full Pack Filler Pro script, you would declare
// var config = {};
// var undoStack = [];
// var redoStack = [];
// var isFilling = false;
// var panelElement = null;
// here as well.


// This is the main entry point of the script.
// The code from the @require directives will be loaded before this IIFE runs.
// This IIFE contains the primary initialization logic that uses the functions
// and variables defined in the @require'd files and the global variables.
(function() {
    'use strict';

    console.log('Simple Panel Test (Modular): Main script IIFE started.');

    // The global variable testPanelElement is now declared outside this IIFE.


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

    console.log('Simple Panel Test (Modular): Main script IIFE finished.');

})();
