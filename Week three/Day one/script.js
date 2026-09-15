// ==========================================
// WEEK 3 - DAY 1: MODERN JAVASCRIPT & DOM INTEGRATION
// ==========================================

// 1. SELECTING THE DOM ELEMENT
// Select the announcement box container from HTML using its ID
const announcementBox = document.querySelector("#announcement-box");

// 2. CONST & LET DECLARATIONS (ES6 Variables)
// Define constants for values that do not change
const airportName = "Islamabad International Airport";

// Define a variable using let for status text that may change dynamically
let terminalStatus = "Operational & Secure";

// 3. FUNCTION WITH DEFAULT PARAMETERS & TEMPLATE LITERALS
// This function generates an ES6 template string, defaulting to Gate-01 if no gate is passed
function generateAnnouncement(flightNumber, boardingGate = "Gate-01") {
    
    // Using Template Literals (backticks and ${}) for clean string interpolation
    let message = `Attention Passengers: Flight <strong>${flightNumber}</strong> for ${airportName} is boarding at <strong>${boardingGate}</strong>. Terminal Status: <em>${terminalStatus}</em>.`;
    
    // Return the generated message string back to the function call
    return message;
}

// 4. RENDERING DATA TO THE FRONTEND UI
// Call our ES6 function with specific flight and gate parameters
let finalNotice = generateAnnouncement("PK-303", "Gate-04");

// Inject the generated template literal string directly into the HTML element innerHTML
announcementBox.innerHTML = finalNotice;