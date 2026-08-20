/* ==========================================
   1. VARIABLES & DATA TYPES
   ========================================== */
// Declaring a string variable (text data) representing our system name
let systemName = "Airport Main Gateway";

// Declaring a number variable representing the terminal software version
const terminalVersion = 2.1;

// Declaring a boolean variable (true/false) representing operational status
let isOperational = true;

// Logging variables to the developer console to verify their values
console.log("System Name:", systemName);
console.log("Terminal Version:", terminalVersion);
console.log("Is Operational:", isOperational);


/* ==========================================
   2. OPERATORS & EXPRESSIONS
   ========================================== */
// Using arithmetic addition operators to calculate total server nodes
let primaryServers = 4;
let backupServers = 3;
let totalServers = primaryServers + backupServers; // Expression evaluating to 7

// Logging the calculation expression result to the console
console.log("Total Active Servers:", totalServers);


/* ==========================================
   3. DOM INTRODUCTION & SELECTING ELEMENTS
   ========================================== */
// Selecting the H1 heading element from the HTML document using its unique ID
let titleElement = document.getElementById("main-title");

// Selecting the paragraph status element from the DOM
let statusElement = document.getElementById("status-text");

// Selecting the interactive button from the DOM
let actionButton = document.getElementById("action-btn");

// Logging the entire DOM document structure object to the console
console.log("DOM Document Object:", document);


/* ==========================================
   4. HANDLING USER INTERACTION & EVENTS
   ========================================== */
// Adding an event listener to the button to listen for a "click" event from the user
actionButton.addEventListener("click", function() {
    
    // Dynamically changing the text content of the title element in the HTML
    titleElement.textContent = "Airport IT - Diagnostics Active";

    // Updating the paragraph text content dynamically using our variables and expressions
    statusElement.textContent = "Status: All " + totalServers + " servers online and secure!";
    
    // Changing the CSS text color dynamically via JavaScript
    statusElement.style.color = "#16a34a"; // Changes status text color to green
    
    // Logging a confirmation message to the console when the event triggers
    console.log("Diagnostics button was clicked and DOM was updated successfully.");
});