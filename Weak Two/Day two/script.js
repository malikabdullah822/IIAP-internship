// ==========================================
// 1. SELECTING ELEMENTS (querySelector & querySelectorAll)
// ==========================================

// Select the main heading element using its ID
const mainTitle = document.querySelector("#main-title");

// Select the paragraph element where status messages will show
const statusDisplay = document.querySelector("#status-display");

// Select the main interactive button
const actionBtn = document.querySelector("#action-btn");

// Select ALL elements with the class 'gate-status' (returns a NodeList list)
const gateElements = document.querySelectorAll(".gate-status");


// ==========================================
// 2. EVENT LISTENER & CONDITIONAL LOGIC (if / else & else if)
// ==========================================

// Listen for a click event on the diagnostic button
actionBtn.addEventListener("click", function() {

    // Get the current hour of the day (0 to 23 format)
    let currentHour = new Date().getHours();
    
    // Define a variable for testing switch statements and nested conditions
    let activeTerminalCode = "PK"; 

    // Standard if / else if / else conditional structure for time-based shift checks
    if (currentHour < 12) {
        // Runs if the time is before 12:00 PM
        statusDisplay.textContent = "Morning Shift Active: All systems operational.";
        statusDisplay.style.color = "#28a745"; // Green text
    } 
    else if (currentHour >= 12 && currentHour < 18) {
        // Runs if the time is between 12:00 PM and 5:59 PM
        statusDisplay.textContent = "Afternoon Shift Active: High passenger volume.";
        statusDisplay.style.color = "#ffc107"; // Yellow/Orange text
    } 
    else {
        // Runs for any time past 6:00 PM
        statusDisplay.textContent = "Night Shift Active: Reduced terminal lighting.";
        statusDisplay.style.color = "#17a2b8"; // Blue text
    }


    // ==========================================
    // 3. NESTED CONDITIONS
    // ==========================================
    let securityLevel = 2;
    let clearanceGranted = true;

    // Outer condition checking clearance status
    if (clearanceGranted) {
        
        // Inner (nested) condition checking security clearance tier
        if (securityLevel >= 3) {
            console.log("Access Level: Full clearance across all tarmac zones.");
        } else {
            console.log("Access Level: Restricted to terminal building zones only.");
        }

    } else {
        console.log("Access Denied: Clearance not active.");
    }


    // ==========================================
    // 4. SWITCH STATEMENTS
    // ==========================================
    // Switch statements are ideal for checking one variable against multiple exact values
    switch (activeTerminalCode) {
        case "PK":
            console.log("Terminal Route: International Gateway (PIA Operations).");
            break; // Exits the switch block once a match is found
        case "ED":
            console.log("Terminal Route: European Express Arrivals.");
            break;
        case "AI":
            console.log("Terminal Route: Regional Domestic Connectors.");
            break;
        default:
            // Runs if no case matches the variable value
            console.log("Terminal Route: Unrecognized airline code.");
            break;
    }


    // ==========================================
    // 5. LOOPING THROUGH MULTIPLE ELEMENTS (querySelectorAll)
    // ==========================================
    // Loop through each element selected via querySelectorAll and update text dynamically
    gateElements.forEach(function(gate, index) {
        // 'index' starts at 0, so we add 1 to make it Gate 1, Gate 2, Gate 3
        gate.textContent = "Gate " + (index + 1) + ": Secured & Monitored";
        gate.style.borderLeft = "5px solid #004080";
    });

});