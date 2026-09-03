// Import useState hook from React to manage the toggle state
import { useState } from 'react';
import './App.css';

// Child Component: Displays the status title and current state badge
function GateStatusDisplay({ isOpen }) {
  return (
    // Card container for status display
    <div className="status-display-card">
      <h2>Boarding Gate A-07 Status</h2>
      
      {/* Conditional styling and text based on the isOpen boolean prop */}
      <div className={`status-badge ${isOpen ? 'open' : 'closed'}`}>
        {isOpen ? 'GATE OPEN - Boarding in Progress' : 'GATE CLOSED - Flight Departed'}
      </div>
    </div>
  );
}

// Child Component: Contains the action button and receives event handler via props
function GateToggleButton({ onToggle, isOpen }) {
  return (
    // Button container wrapper
    <div className="btn-container">
      {/* Button that triggers the parent's handler function on click */}
      <button className="toggle-btn" onClick={onToggle}>
        {isOpen ? 'Close Gate' : 'Open Gate'}
      </button>
    </div>
  );
}

// Parent Component: Manages the core state and composes child components together
export default function App() {
  
  // Define state 'isOpen' initialized as true, and 'setIsOpen' to modify it
  const [isOpen, setIsOpen] = useState(true);

  // Event handler function to toggle the gate status between true and false
  const handleToggle = () => {
    // Inverts the current boolean state value
    setIsOpen(!isOpen);
  };

  // Return the main JSX structure for rendering
  return (
    // Main container wrapping the entire application layout
    <div className="app-container">
      
      {/* Airport header section */}
      <header className="airport-header">
        <h1>Islamabad International Airport</h1>
        <p>Gate Operations & Toggle Control System (Day 2)</p>
      </header>

      {/* Main content section housing composed child components */}
      <main className="airport-main">
        <div className="control-panel">
          
          {/* Rendering Child Component 1 and passing state as a prop */}
          <GateStatusDisplay isOpen={isOpen} />

          {/* Rendering Child Component 2 and passing event handler function as a prop */}
          <GateToggleButton onToggle={handleToggle} isOpen={isOpen} />

        </div>
      </main>

      {/* Footer section */}
      <footer className="airport-footer">
        <p>&copy; 2026 Islamabad International Airport. All Rights Reserved.</p>
      </footer>
      
    </div>
  );
}