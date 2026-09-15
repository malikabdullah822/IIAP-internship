// Import React library and useState hook for managing states
import React, { useState } from 'react';
// Import custom stylesheet for styling the comprehensive dashboard
import './App.css';

// Child Component 1: Renders individual flight cards with props and conditional status badges
function FlightCard({ flightNumber, destination, airline, status, gate, isVIP }) {
  // Determine badge CSS class based on the flight status string
  const statusClass = status === 'On Time' ? 'badge-success' : status === 'Delayed' ? 'badge-danger' : 'badge-warning';

  return (
    // Conditional card container styling adding a vip-card class if isVIP is true
    <div className={`flight-card ${isVIP ? 'vip-card' : ''}`}>
      {/* Conditional rendering for VIP lounge badge using logical && operator */}
      {isVIP && <span className="vip-banner">⭐ VIP Lounge Access</span>}

      {/* Display flight number */}
      <h3>Flight: {flightNumber}</h3>
      {/* Display destination city */}
      <p><strong>Destination:</strong> {destination}</p>
      {/* Display airline name */}
      <p><strong>Airline:</strong> {airline}</p>
      {/* Display gate allocation */}
      <p><strong>Gate:</strong> {gate}</p>

      {/* Status section container */}
      <div className="status-container">
        <span>Status:</span>
        {/* Dynamic status badge with computed class name */}
        <span className={`badge ${statusClass}`}>{status}</span>
      </div>
    </div>
  );
}

// Child Component 2: Renders individual flight items inside a data table row
function FlightTableRow({ flight }) {
  // Determine table status class dynamically
  const tableStatusClass = flight.status === 'On Time' ? 'status-on' : flight.status === 'Delayed' ? 'status-delayed' : 'status-boarding';

  return (
    // Table row container
    <tr className="flight-row">
      <td>{flight.flightNumber}</td>
      <td>{flight.destination}</td>
      <td>{flight.airline}</td>
      <td>{flight.gate}</td>
      <td>
        {/* Status span inside table cell */}
        <span className={`table-badge ${tableStatusClass}`}>{flight.status}</span>
      </td>
    </tr>
  );
}

// Main App Component combining all elements for Day 5
export default function App() {
  // Master array of flight data combining lists and objects
  const allFlights = [
    { id: 1, flightNumber: 'PK-301', destination: 'Karachi (KHI)', airline: 'PIA', status: 'On Time', gate: 'Gate A-05', isVIP: true },
    { id: 2, flightNumber: 'PK-785', destination: 'London (LHR)', airline: 'PIA', status: 'Delayed', gate: 'Gate B-12', isVIP: false },
    { id: 3, flightNumber: 'PK-211', destination: 'Dubai (DXB)', airline: 'Emirates', status: 'Boarding', gate: 'Gate C-02', isVIP: true },
    { id: 4, flightNumber: 'PK-451', destination: 'Toronto (YYZ)', airline: 'PIA', status: 'On Time', gate: 'Gate A-01', isVIP: false },
    { id: 5, flightNumber: 'PK-607', destination: 'Lahore (LHE)', airline: 'AirBlue', status: 'Delayed', gate: 'Gate B-04', isVIP: false }
  ];

  // State hook for managing search input value
  const [searchTerm, setSearchTerm] = useState('');

  // Filter flights array based on user input matching destination or flight number
  const filteredFlights = allFlights.filter(flight =>
    flight.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Main wrapper container for the application layout
    <div className="app-container">
      {/* Header section representing Islamabad International Airport */}
      <header className="app-header">
        <h1>Islamabad International Airport</h1>
        <p>Comprehensive Flight Control Center (Week 4, Day 5 Capstone)</p>
      </header>

      {/* Section 1: Featured VIP / Priority Flights using Props & Conditional Rendering */}
      <section className="section-block">
        <h2>Priority & Featured Flights (Day 3 Concepts)</h2>
        <div className="cards-grid">
          {/* Render FlightCard components explicitly passing props */}
          <FlightCard flightNumber="PK-301" destination="Karachi (KHI)" airline="PIA" status="On Time" gate="Gate A-05" isVIP={true} />
          <FlightCard flightNumber="PK-785" destination="London (LHR)" airline="PIA" status="Delayed" gate="Gate B-12" isVIP={false} />
          <FlightCard flightNumber="PK-211" destination="Dubai (DXB)" airline="Emirates" status="Boarding" gate="Gate C-02" isVIP={true} />
        </div>
      </section>

      {/* Section 2: Interactive Filterable Schedule using Lists, .map(), and useState */}
      <section className="section-block">
        <h2>Live Master Schedule & Search Filter (Day 4 Concepts)</h2>
        
        {/* Search input control */}
        <div className="filter-container">
          <input
            type="text"
            placeholder="Search flights by number or destination..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Data table container */}
        <div className="table-container">
          <table className="flights-table">
            <thead>
              <tr>
                <th>Flight No</th>
                <th>Destination</th>
                <th>Airline</th>
                <th>Gate</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Conditional check for filtered results */}
              {filteredFlights.length > 0 ? (
                // Use .map() to loop over filtered items and render rows with unique keys
                filteredFlights.map(flight => (
                  <FlightTableRow key={flight.id} flight={flight} />
                ))
              ) : (
                // Fallback row if search yields no results
                <tr>
                  <td colSpan="5" className="no-results">No flights found matching your search query.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}