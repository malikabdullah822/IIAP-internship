// ==========================================
// WEEK 3 - DAY 2: ARROW FUNCTIONS & REFACTORING
// ==========================================

// 1. SELECTING ELEMENTS USING QUERYSELECTOR
// Select DOM elements from our semantic HTML structure
// Find the select menu where the user chooses a flight number.
const flightSelect = document.querySelector("#flightSelect");
// Find the button that starts the flight status check.
const checkBtn = document.querySelector("#checkBtn");
// Find the box where the flight announcement will be displayed.
const announcementBox = document.querySelector("#announcementBox");

// 2. CONSTANT DECLARATIONS (ES6)
// Store the airport name used in every valid flight announcement.
const airportName = "Islamabad International Airport";

// Store each available flight number together with its boarding gate.
const flightGates = {
    // Assign Gate-05 to flight PK-701.
    "PK-701": "Gate-05",
    // Assign Gate-06 to flight PK-702.
    "PK-702": "Gate-06",
    // Assign Gate-07 to flight PK-703.
    "PK-703": "Gate-07",
    // Assign Gate-08 to flight PK-704.
    "PK-704": "Gate-08",
    // Assign Gate-09 to flight PA-201.
    "PA-201": "Gate-09",
    // Assign Gate-10 to flight PA-202.
    "PA-202": "Gate-10"
};

// 3. REFACTORING REGULAR FUNCTION INTO AN ARROW FUNCTION
// This arrow function formats the flight status message using template literals and default parameters
// Receive a flight number and use Gate-02 when no gate is provided.
const generateFlightMessage = (flightNumber, boardingGate = "Gate-02") => {
    // Return formatted string back to caller function
    // Build the announcement using the supplied flight and gate values.
    return `Flight <strong>${flightNumber}</strong> arriving at ${airportName} is cleared for boarding at <strong>${boardingGate}</strong>.`;
};

// 4. USING ARROW FUNCTION IN CALLBACK (Event Listener)
// Attach click event listener using an anonymous arrow function callback
// Run this function whenever the user clicks the check button.
checkBtn.addEventListener("click", () => {
    
    // Retrieve trimmed input value from text field
    // Read the selected flight number and remove extra spaces.
    let flightNum = flightSelect.value.trim();

    // Validate if the input field is empty
    // Stop the function when the user has not entered a flight number.
    if (flightNum === "") {
        // Tell the user that a flight number is required.
        alert("Please enter a valid flight number!");
        // Leave the event handler before trying to search for a flight.
        return;
    }

    // Convert the input to uppercase so PK-701 and pk-701 work the same way.
    const flightKey = flightNum.toUpperCase();
    // Search the flight list and retrieve the matching boarding gate.
    const boardingGate = flightGates[flightKey];

    // Check whether the entered flight exists in the schedule.
    if (!boardingGate) {
        // Display a message when no matching flight number is found.
        announcementBox.innerHTML = `Flight <strong>${flightKey}</strong> was not found in today's schedule.`;
        // Make the result box visible on the page.
        announcementBox.classList.remove("hidden");
        // Stop the function because there is no gate for this flight.
        return;
    }

    // Call our arrow function to generate final announcement text
    // Create a valid announcement with the matching flight and gate.
    let messageResult = generateFlightMessage(flightKey, boardingGate);

    // Inject message into the DOM container element
    // Place the generated announcement inside the result box.
    announcementBox.innerHTML = messageResult;

    // Remove hidden class to display the announcement box on UI
    // Make the valid flight announcement visible on the page.
    announcementBox.classList.remove("hidden");
});

// 5. DEMONSTRATING ARROW FUNCTIONS WITH ARRAY CALLBACKS
// Sample list of terminal gates for testing callback methods
// Create an array containing sample terminal gate names.
const terminalGates = ["Gate A", "Gate B", "Gate C"];

// Using arrow function inside array forEach method callback
// Process every gate in the array one at a time.
terminalGates.forEach((gate, index) => {
    // Print each gate and its position in the array to the browser console.
    console.log(`Processing terminal gate index ${index}: ${gate}`);
});