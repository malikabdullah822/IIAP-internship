// Import React library and useState hook
import React from 'react';
// Import external stylesheet for styling the flight cards
import './App.css';
// FlightCard component that accepts props and displays flight details with conditional badges
function FlightCard({ flightNumber, destination, status, gate, isVIP }) {
  // Determine badge class based on flight status condition
  let statusBadgeClass = '';
  if (status === 'On Time') {
    statusBadgeClass = 'badge-success'; // Green badge for on time flights
  } else if (status === 'Delayed') {
    statusBadgeClass = 'badge-danger'; // Red badge for delayed flights
  } else {
    statusBadgeClass = 'badge-warning'; // Yellow badge for boarding/other status
  }

  return (
    // Main container card with conditional VIP border styling
    <div className={`flight-card ${isVIP ? 'vip-card' : ''}`}>
      
      {/* Conditional rendering using && operator: Show VIP Lounge Access banner if isVIP prop is true */}
      {isVIP && <div className="vip-banner">⭐ VIP Lounge Access</div>}

      {/* Display flight number passed via props */}
      <h3>Flight: {flightNumber}</h3>
      
      {/* Display destination city */}
      <p><strong>Destination:</strong> {destination}</p>
      
      {/* Display boarding gate number */}
      <p><strong>Gate:</strong> {gate}</p>

      {/* Conditional rendering using Ternary operator for status text display */}
      <div className="status-container">
        <span>Status: </span>
        <span className={`badge ${statusBadgeClass}`}>
          {status ? status : 'Unknown'}
        </span>
      </div>

    </div>
  );
}

// Main App component serving as the parent component
export default function App() {
  return (
    // Main wrapper for Islamabad International Airport dashboard
    <div className="app-container">
      {/* Header section */}
      <header className="app-header">
        <h1>Islamabad International Airport</h1>
        <p>Flight Information & Gate Status Dashboard (Week 4, Day 3)</p>
      </header>

      {/* Flight cards grid container */}
      <div className="cards-grid">
        {/* Child component 1 with props */}
        <FlightCard 
          flightNumber="PK-301" 
          destination="Karachi (KHI)" 
          status="On Time" 
          gate="Gate A-05" 
          isVIP={true} 
        />

        {/* Child component 2 with props */}
        <FlightCard 
          flightNumber="PK-785" 
          destination="London (LHR)" 
          status="Delayed" 
          gate="Gate B-12" 
          isVIP={false} 
        />

        {/* Child component 3 with props */}
        <FlightCard 
          flightNumber="PK-211" 
          destination="Dubai (DXB)" 
          status="Boarding" 
          gate="Gate C-02" 
          isVIP={true} 
        />
      </div>
    </div>
  );
}