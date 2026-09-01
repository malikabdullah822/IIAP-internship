// ==========================================
// WEEK 3 - DAY 4: DESTRUCTURING & SPREAD/REST
// ==========================================

// 1. SELECTING DOM ELEMENTS
const searchBtn = document.querySelector("#searchBtn");
const showAllBtn = document.querySelector("#showAllBtn");
const flightInput = document.querySelector("#flightInput");
const flightContainer = document.querySelector("#flightContainer");

// 2. OBJECTS & ARRAYS DATA SOURCE
const airportData = {
    terminal: "Terminal-2",
    city: "Islamabad",
    flights: [
        { flightNo: "PK-701", destination: "Dubai", gate: "Gate-05" },
        { flightNo: "PK-702", destination: "London", gate: "Gate-06" },
        { flightNo: "PA-201", destination: "Jeddah", gate: "Gate-09" }
    ]
};

// 3. TOPIC COVERED: Object & Array Destructuring
// Extracting terminal, city, and flights array from 'airportData' using object destructuring
const { terminal, city, flights } = airportData;

// 4. TOPIC COVERED: Spread Operator (...)
// Using Spread operator to create an updated flights list by copying old ones and adding a new entry
const updatedFlights = [
    ...flights,
    { flightNo: "PK-705", destination: "Toronto", gate: "Gate-11" }
];

// 5. RENDER FUNCTION USING DESTRUCTURING IN MAP
// Function to display an array of flights on the UI
const renderFlights = (flightsArray) => {
    flightContainer.innerHTML = "";

    if (flightsArray.length === 0) {
        flightContainer.innerHTML = "<p>No flights found.</p>";
        return;
    }

    const cardsHtml = flightsArray.map(flight => {
        // TOPIC COVERED: Destructuring inside loop/map for clean variable access
        const { flightNo, destination, gate } = flight;

        return `
            <div class="flight-card">
                <strong>Flight:</strong> ${flightNo} | 
                <strong>To:</strong> ${destination} | 
                <strong>Gate:</strong> ${gate} (${terminal}, ${city})
            </div>
        `;
    });

    flightContainer.innerHTML = cardsHtml.join("");
};

// 6. EVENT LISTENER FOR SEARCH BUTTON (Connecting Inputs & Logic)
searchBtn.addEventListener("click", () => {
    let searchKey = flightInput.value.trim().toUpperCase();

    if (searchKey === "") {
        flightContainer.innerHTML = "<p style='color:red;'>Please enter a flight number!</p>";
        return;
    }

    // Filter flights matching the search key
    const foundFlights = updatedFlights.filter(f => f.flightNo === searchKey);
    renderFlights(foundFlights);
});

// EVENT LISTENER FOR SHOW ALL BUTTON
showAllBtn.addEventListener("click", () => {
    renderFlights(updatedFlights);
});

// Initial render to show all flights when page loads
renderFlights(updatedFlights);