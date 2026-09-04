// Import React library and useState hook for managing search and filter states
import React, { useState } from 'react';
// Import custom stylesheet for styling the dashboard
import './App.css';

// Simple component to render an individual flight list item
function FlightListItem({ flight }) {
  // Return table row containing flight details
  return (
    // Table row with unique key handled by parent, styling status dynamically
    <tr className="flight-row">
      {/* Display flight number */}
      <td>{flight.flightNumber}</td>
      {/* Display destination city */}
      <td>{flight.destination}</td>
      {/* Display airline name */}
      <td>{flight.airline}</td>
      {/* Display status with a dynamic class */}
      <td>
        <span className={`status-badge ${flight.status.toLowerCase()}`}>
          {flight.status}
        </span>
      </td>
    </tr>
  );
}

// Main App component serving as the parent container
export default function App() {
  // Define an array of flight objects (Lists concept) representing airport schedule
  const flightData = [
    { id: 1, flightNumber: 'PK-301', destination: 'Karachi (KHI)', airline: 'PIA', status: 'On Time' },
    { id: 2, flightNumber: 'PK-785', destination: 'London (LHR)', airline: 'PIA', status: 'Delayed' },
    { id: 3, flightNumber: 'PK-211', destination: 'Dubai (DXB)', airline: 'Emirates', status: 'Boarding' },
    { id: 4, flightNumber: 'PK-451', destination: 'Toronto (YYZ)', airline: 'PIA', status: 'On Time' },
    { id: 5, flightNumber: 'PK-607', destination: 'Lahore (LHE)', airline: 'AirBlue', status: 'Delayed' }
  ];

  // State hook to track the search input value entered by the user
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the flightData list based on search term matching destination or flight number
  const filteredFlights = flightData.filter(flight => 
    flight.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.flightNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Return the main JSX structure of the dashboard
  return (
    // Main wrapper container for the airport application
    <div className="app-container">
      {/* Header section of Islamabad International Airport */}
      <header className="app-header">
        <h1>Islamabad International Airport</h1>
        <p>Filterable Flight Schedule Dashboard (Week 4, Day 4)</p>
      </header>

      {/* Search filter input container */}
      <div className="filter-container">
        {/* Input field to capture user search text */}
        <input 
          type="text" 
          placeholder="Search by flight number or destination..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Table container for displaying the rendered list */}
      <div className="table-container">
        <table className="flights-table">
          <thead>
            <tr>
              <th>Flight No</th>
              <th>Destination</th>
              <th>Airline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Conditional check if filtered results exist */}
            {filteredFlights.length > 0 ? (
              // Use .map() to loop through the filtered list and render components with unique keys
              filteredFlights.map((flight) => (
                <FlightListItem key={flight.id} flight={flight} />
              ))
            ) : (
              // Fallback row if no flights match the search query
              <tr>
                <td colSpan="4" className="no-results">No flights found matching your search.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}