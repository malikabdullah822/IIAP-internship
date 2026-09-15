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

// Set maximum passenger capacity for the airport terminal
const MAX_CAPACITY = 100;

// Attach a click event listener to the button to listen for user interactions
clickBtn.addEventListener("click", function() {
    
    // Check if we have reached the maximum capacity
    if (clickCount >= MAX_CAPACITY) {
        console.log("⚠️  TERMINAL FULL! Maximum capacity (" + MAX_CAPACITY + ") reached. No more check-ins allowed.");
        alert("Terminal is at full capacity (" + MAX_CAPACITY + " passengers).\nPlease wait for passengers to proceed.");
        
        // Disable the button to prevent further clicks
        clickBtn.disabled = true;
        clickBtn.style.backgroundColor = "#ccc";
        clickBtn.style.cursor = "not-allowed";
        clickBtn.textContent = "Terminal Full - Closed";
        return; // Exit the function, don't increment
    }
    
    // Increment the clickCount variable by 1 every time the button is clicked
    clickCount++;

    // Update the text content of the display span dynamically using DOM manipulation
    counterDisplay.textContent = clickCount;

    // Check if we're close to capacity (80% full)
    if (clickCount === 80) {
        console.log("⚠️  WARNING: Terminal is 80% full! (" + clickCount + "/" + MAX_CAPACITY + ")");
        alert("Terminal capacity is getting full! Only " + (MAX_CAPACITY - clickCount) + " spaces left.");
    }

    // Log a status message to the browser console showing the updated check-in count
    console.log("Check-in registered! Total count: " + clickCount + "/" + MAX_CAPACITY);
    
    // Show capacity percentage
    let capacityPercentage = Math.round((clickCount / MAX_CAPACITY) * 100);
    console.log("Terminal capacity: " + capacityPercentage + "%");

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


// ==========================================
// 5. FOR LOOP - Best for known number of iterations
// ==========================================

// FOR LOOP SYNTAX: for (initialization; condition; increment/decrement)
// Use a for loop when you know exactly how many times you need to repeat

console.log("\n--- FOR LOOP EXAMPLE ---");

// Loop from 0 to 4 (5 iterations total)
// i = 0: Starting point (initialization)
// i < 5: Continue looping while i is less than 5 (condition)
// i++: Add 1 to i after each loop (increment)
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration: " + i);
}

// Real-world example: Process each gate
console.log("\n--- FOR LOOP with ARRAY ---");
for (let x = 0; x < terminalGates.length; x++) {
    console.log("Processing gate: " + terminalGates[x]);
}


// ==========================================
// 6. WHILE LOOP - Best for unknown number of iterations
// ==========================================

// WHILE LOOP SYNTAX: while (condition)
// Use a while loop when you don't know exactly how many repetitions you need
// Continue looping AS LONG AS the condition is TRUE

console.log("\n--- WHILE LOOP EXAMPLE ---");

// Start with a count variable
let count = 0;

// The while loop continues as long as count is less than 3
while (count < 3) {
    console.log("While loop count: " + count);
    count++; // IMPORTANT: Increment to avoid infinite loop!
}

// Real-world example: Security scan that continues until a condition is met
console.log("\n--- WHILE LOOP SECURITY EXAMPLE ---");
let securityLevel = 100;

while (securityLevel > 75) {
    console.log("Security level is good: " + securityLevel);
    securityLevel -= 10; // Decrease security level
}
console.log("Alert! Security level dropped below 75: " + securityLevel);


// ==========================================
// 7. DO-WHILE LOOP - Executes at least once
// ==========================================

// DO-WHILE LOOP SYNTAX: do { ... } while (condition)
// The DO-WHILE loop runs the code block FIRST, THEN checks the condition
// This guarantees the loop runs at least ONCE, even if the condition is false

console.log("\n--- DO-WHILE LOOP EXAMPLE ---");

let number = 0;

// This do-while loop will run at least once
do {
    console.log("Do-While loop number: " + number);
    number++; // IMPORTANT: Always increment to avoid infinite loop!
} while (number < 3); // Check condition AFTER each execution

// Real-world example: Database retry attempt (try at least once)
console.log("\n--- DO-WHILE LOOP RETRY EXAMPLE ---");
let attempts = 0;
let connected = false;

do {
    console.log("Attempt #" + (attempts + 1) + " to connect to server...");
    attempts++;
    // Simulating connection after 2 attempts
    if (attempts >= 2) {
        connected = true;
    }
} while (!connected && attempts < 5); // Continue while NOT connected AND attempts less than 5

console.log("Connection successful after " + attempts + " attempts!");


// ==========================================
// 8. COMPARISON OF ALL THREE LOOPS
// ==========================================

console.log("\n--- LOOP COMPARISON ---");
console.log("FOR LOOP: Use when you know the exact number of iterations (i.e., array length)");
console.log("WHILE LOOP: Use when the number of iterations depends on a condition");
console.log("DO-WHILE LOOP: Use when you must execute the code at least once, then check condition");


// ==========================================
// 9. PRACTICAL EXAMPLES FOR AIRPORT COUNTER
// ==========================================

console.log("\n\n╔════════════════════════════════════════════╗");
console.log("║  AIRPORT COUNTER - PRACTICAL LOOP EXAMPLES  ║");
console.log("╚════════════════════════════════════════════╝\n");

// Example 1: FOR LOOP - Batch Check-in Processing
console.log("--- EXAMPLE 1: FOR LOOP - Bulk Passenger Check-in ---");
let batchCheckIns = 0;

// Process 5 passengers at once using a for loop
for (let passenger = 1; passenger <= 5; passenger++) {
    batchCheckIns++;
    console.log("✓ Passenger #" + passenger + " checked in | Total batch: " + batchCheckIns);
}
console.log("Batch processing complete! Total passengers: " + batchCheckIns + "\n");


// Example 2: WHILE LOOP - Count Until Terminal Capacity
console.log("--- EXAMPLE 2: WHILE LOOP - Fill Terminal to 50% Capacity ---");
let terminalCapacity = 100;
let targetCapacity = 50; // 50% of terminal
let currentPassengers = 0;

// Keep adding passengers while we haven't reached 50% capacity
while (currentPassengers < targetCapacity) {
    currentPassengers++;
    if (currentPassengers % 10 === 0) { // Log every 10 passengers
        console.log("Current occupancy: " + currentPassengers + "/" + terminalCapacity + " (" + 
                   Math.round((currentPassengers / terminalCapacity) * 100) + "%)");
    }
}
console.log("✓ Terminal reached target capacity: " + currentPassengers + " passengers\n");


// Example 3: DO-WHILE LOOP - Mandatory Shift Check-ins
console.log("--- EXAMPLE 3: DO-WHILE LOOP - Daily Minimum Requirement ---");
let shiftCheckIns = 0;
let mandatoryMinimum = 3; // Must do at least 3 check-ins per shift

// At least one check-in will happen, then continue based on condition
do {
    shiftCheckIns++;
    console.log("► Shift check-in #" + shiftCheckIns + " completed");
    
    // Simulate: Every 3rd check-in, verify if more are needed
    if (shiftCheckIns % 3 === 0) {
        console.log("  ↳ Minimum requirement check: " + shiftCheckIns + " / " + mandatoryMinimum);
    }
} while (shiftCheckIns < mandatoryMinimum); // Must complete minimum 3 check-ins

console.log("✓ Shift minimum requirement met: " + shiftCheckIns + " check-ins\n");


// Example 4: COMBINED LOOPS - Realistic Airport Scenario
console.log("--- EXAMPLE 4: COMBINED - Realistic Daily Operations ---");
let totalDailyCheckIns = 0;
let gatesOpen = 3; // Number of gates operating

// FOR loop: Each gate processes passengers
console.log("Processing passengers through " + gatesOpen + " gates...");
for (let gate = 1; gate <= gatesOpen; gate++) {
    console.log("\n  Gate " + gate + ":");
    let gateCheckIns = 0;
    
    // WHILE loop: Each gate processes until quota reached
    while (gateCheckIns < 10) {
        gateCheckIns++;
        totalDailyCheckIns++;
        
        if (gateCheckIns === 1 || gateCheckIns === 10) {
            console.log("    ├─ Check-in #" + gateCheckIns + " | Gate total: " + gateCheckIns);
        }
    }
}

console.log("\n  ✓ Daily Total Check-ins: " + totalDailyCheckIns);
console.log("  ✓ Average per gate: " + (totalDailyCheckIns / gatesOpen) + "\n");


// Example 5: DO-WHILE with User Action (Simulated)
console.log("--- EXAMPLE 5: DO-WHILE - System Retry Logic ---");
let retryAttempts = 0;
let maxRetries = 3;
let saveSuccessful = false;

do {
    retryAttempts++;
    console.log("Attempt #" + retryAttempts + ": Saving passenger data...");
    
    // Simulate: Success on 2nd attempt
    if (retryAttempts === 2) {
        saveSuccessful = true;
        console.log("✓ Data saved successfully!");
    } else {
        console.log("✗ Save failed, retrying...");
    }
} while (!saveSuccessful && retryAttempts < maxRetries);

if (saveSuccessful) {
    console.log("✓ Passenger check-in confirmed!\n");
} else {
    console.log("✗ Failed to save after " + retryAttempts + " attempts\n");
}