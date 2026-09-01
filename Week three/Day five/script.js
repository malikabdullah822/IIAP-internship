// ==========================================
// WEEK 3 - DAY 5: FINAL POLISH & CODE REVIEW
// ==========================================

// 1. SELECTING DOM ELEMENTS WITH ERROR PREVENTION
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const resetBtn = document.querySelector("#resetBtn");
const flightContainer = document.querySelector("#flightContainer");

// 2. COMPREHENSIVE FLIGHT DATABASE (Objects & Nested Data)
const airportManifest = {
    terminal: "Terminal-2",
    city: "Islamabad",
    flights: [
        { flightNo: "PK-701", destination: "Dubai", status: "Active", gate: "Gate-05" },
        { flightNo: "PK-702", destination: "London", status: "Delayed", gate: "Gate-06" },
        { flightNo: "PA-201", destination: "Jeddah", status: "Active", gate: "Gate-09" },
        { flightNo: "PA-202", destination: "Doha", status: "Landed", gate: "Gate-10" }
    ]
};

// 3. OBJECT DESTRUCTURING FOR METADATA ACCESS
const { terminal, city, flights } = airportManifest;

// 4. RENDER FUNCTION USING MAP AND DESTRUCTURING
const renderManifest = (flightsArray) => {
    // Clear container before injecting new elements
    flightContainer.innerHTML = "";

    // Handle empty data state cleanly (Bug Fix / Polish)
    if (flightsArray.length === 0) {
        flightContainer.innerHTML = "<p style='color:#d9534f; text-align:center;'>No matching flights found in system.</p>";
        return;
    }

    // Transform array objects into HTML strings using .map()
    const cardsMarkup = flightsArray.map(flight => {
        // Destructure properties from each flight object
        const { flightNo, destination, status, gate } = flight;

        return `
            <div class="flight-card">
                <strong>Flight:</strong> ${flightNo} | 
                <strong>To:</strong> ${destination} | 
                <strong>Status:</strong> ${status} | 
                <strong>Gate:</strong> ${gate} (${terminal})
            </div>
        `;
    });

    // Inject generated HTML cards into DOM container
    flightContainer.innerHTML = cardsMarkup.join("");
};

// 5. EVENT LISTENERS FOR SEARCH AND INTERACTION (Bug-free filtering)
searchBtn.addEventListener("click", () => {
    // Trim and uppercase input string to maintain formatting consistency
    const query = searchInput.value.trim().toUpperCase();

    // Prevent searching with empty strings
    if (query === "") {
        alert("Please enter a valid flight number!");
        return;
    }

    // Filter array based on user search query
    const filteredFlights = flights.filter(flight => flight.flightNo.includes(query));
    renderManifest(filteredFlights);
});

// EVENT LISTENER FOR RESET BUTTON
resetBtn.addEventListener("click", () => {
    searchInput.value = "";
    renderManifest(flights);
});

// Initial render call when page loads completely
renderManifest(flights);