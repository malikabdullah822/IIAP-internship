// ==========================================
// 1. SELECTING DOM ELEMENTS
// ==========================================

// Select the action button from the HTML document and store it in a constant variable
const clickBtn = document.querySelector("#click-btn");

// Select the counter display span element where the updated number will be shown
const counterDisplay = document.querySelector("#counter-display");

// Initialize a counter variable starting at 0 to track the total clicks
let clickCount = 0;


// ==========================================
// 2. ADDING EVENT LISTENER (Click Event)
// ==========================================

// Attach a click event listener to the button to listen for user interactions
clickBtn.addEventListener("click", function() {
    
    // Increment the clickCount variable by 1 every time the button is clicked
    clickCount++;

    // Update the text content of the display span dynamically using DOM manipulation
    counterDisplay.textContent = clickCount;

    // Log a status message to the browser console showing the updated check-in count
    console.log("Check-in registered! Total count: " + clickCount);

});


// ==========================================
// 3. DEMONSTRATING LOOPS (While Loop)
// ==========================================

// Create a variable to represent the number of active security checkpoints
let securityCheckpoints = 3;

// Run the while loop as long as the checkpoints count is greater than 0
while (securityCheckpoints > 0) {
    
    // Print the active status of the current security checkpoint to the console
    console.log("Security checkpoint " + securityCheckpoints + " is active.");
    
    // Decrement the checkpoint count by 1 to prevent an infinite loop
    securityCheckpoints--; 
}


// ==========================================
// 4. LOOPING OVER ARRAYS (List Loop)
// ==========================================

// Create an array list storing multiple terminal gate identifiers
let terminalGates = ["Gate A", "Gate B", "Gate C"];

// Print a section heading to the console
console.log("--- Scanning Terminal Gates ---");

// Iterate through each gate item inside the array using the forEach method
terminalGates.forEach(function(gate, index) {
    
    // Output the specific index number and gate name operational status to the console
    console.log("Index " + index + ": " + gate + " status is operational.");
});