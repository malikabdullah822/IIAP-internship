// ==========================================
// WEEK 3 - DAY 3: ARRAYS, OBJECTS & METHODS
// ==========================================

// 1. SELECTING DOM ELEMENTS
const showAllBtn = document.querySelector("#showAllBtn");
const filterActiveBtn = document.querySelector("#filterActiveBtn");
const flightContainer = document.querySelector("#flightContainer");

// 2. OBJECTS & NESTED DATA (Flight Database Array)
// Creating an array of objects containing detailed flight and nested schedule records
const airportFlights = [
    {
        flightNo: "PK-701",
        destination: "Dubai",
        status: "Active",
        schedule: { gate: "Gate-05", time: "10:30 AM" }
    },
    {
        flightNo: "PK-702",
        destination: "London",
        status: "Delayed",
        schedule: { gate: "Gate-06", time: "01:15 PM" }
    },
    {
        flightNo: "PA-201",
        destination: "Jeddah",
        status: "Active",
        schedule: { gate: "Gate-09", time: "04:45 PM" }
    },
    {
        flightNo: "PA-202",
        destination: "Doha",
        status: "Landings",
        schedule: { gate: "Gate-10", time: "08:00 PM" }
    }
];

// 3. ARRAY METHODS DEMONSTRATION (map and forEach)
// Function to render flights onto the UI using array mapping and arrow functions
const renderFlights = (flightsArray) => {
    // Clear previous contents of the container
    flightContainer.innerHTML = "";

    // Use .map() to transform array objects into HTML strings, then join them
    const flightHtmlCards = flightsArray.map(flight => {
        return `
            <div class="flight-card">
                <strong>Flight:</strong> ${flightNoFormat(flight.flightNo)} | 
                <strong>Destination:</strong> ${flight.destination} | 
                <strong>Status:</strong> ${flight.status} | 
                <strong>Gate:</strong> ${flight.schedule.gate} (${flight.schedule.time})
            </div>
        `;
    });

    // Inject the generated HTML markup into the DOM container
    flightContainer.innerHTML = flightHtmlCards.join("");
};

// Helper arrow function for formatting flight codes
const flightNoFormat = (code) => `<span>${code}</span>`;

// 4. USING FOREACH METHOD FOR CONSOLE LOGGING
// Loop through all flights using forEach array method
airportFlights.forEach((flight, index) => {
    console.log(`Index ${index}: Flight ${flight.flightNo} heading to ${flight.destination}`);
});

// 5. USING FILTER METHOD (Event Listeners)
// Show all flights when "Show All" button is clicked
showAllBtn.addEventListener("click", () => {
    renderFlights(airportFlights);
});

// Filter only active flights using the .filter() array method when button is clicked
filterActiveBtn.addEventListener("click", () => {
    // Filter array to keep elements where status equals "Active"
    const activeFlights = airportFlights.filter(flight => flight.status === "Active");
    renderFlights(activeFlights);
});

// Initial render call to show all flights on page load
renderFlights(airportFlights);