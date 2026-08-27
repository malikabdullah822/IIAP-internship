// ==========================================
// 1. SELECTING DOM ELEMENTS
// ==========================================
const flightInput = document.querySelector("#flight-input");
const searchBtn = document.querySelector("#search-btn");
const statusResult = document.querySelector("#status-result");
const flightList = document.querySelector("#flight-list");

// ==========================================
// 2. ARRAY & LOOP DATA (Active Flights List)
// ==========================================
let activeFlights = ["PK-303", "AI-202", "EK-601", "QR-512"];

// Function to display the initial list of flights using a loop
function displayFlights() {
    flightList.innerHTML = ""; // Clear existing list content
    
    // Using forEach loop to iterate over the array and populate HTML list items
    activeFlights.forEach(function(flight) {
        let li = document.createElement("li");
        li.textContent = flight + " - On Time";
        flightList.appendChild(li);
    });
}

// Call the function on page load to render the list
displayFlights();

// ==========================================
// 3. EVENT LISTENER & CONDITIONAL LOGIC
// ==========================================
searchBtn.addEventListener("click", function() {
    let searchedFlight = flightInput.value.trim().toUpperCase();

    // Check if input field is empty
    if (searchedFlight === "") {
        statusResult.textContent = "Please enter a valid flight number!";
        statusResult.style.color = "#d9534f";
        return;
    }

    // Using a loop/includes condition to check if flight exists in array
    let flightFound = false;
    
    for (let i = 0; i < activeFlights.length; i++) {
        if (activeFlights[i] === searchedFlight) {
            flightFound = true;
            break;
        }
    }

    // Displaying conditional results based on search match
    if (flightFound) {
        statusResult.textContent = "Success: Flight " + searchedFlight + " is Operational!";
        statusResult.style.color = "#28a745";
    } else {
        statusResult.textContent = "Notice: Flight " + searchedFlight + " not found or delayed.";
        statusResult.style.color = "#f0ad4e";
    }
});