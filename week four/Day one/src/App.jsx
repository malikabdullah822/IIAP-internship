// Import the useState hook from React library to manage component state
import { useState } from 'react';

// Import the external CSS stylesheet for styling the application
import './App.css';

// Define and export the main App component function
export default function App() {
  
  // Initialize state variable 'count' with 0 and 'setCount' function to update it
  const [count, setCount] = useState(0);

  // Define an arrow function to handle incrementing the count value by 1
  const handleIncrement = () => {
    // Call setCount to increase the current count value by 1
    setCount(count + 1);
  };

  // Define an arrow function to handle decrementing the count value by 1
  const handleDecrement = () => {
    // Check if the current count is greater than 0 to prevent negative values
    if (count > 0) {
      // Call setCount to decrease the current count value by 1
      setCount(count - 1);
    }
  };

  // Return the JSX structure that will be rendered on the browser interface
  return (
    // Main container div holding all sections of the application
    <div className="app-container">
      
      {/* Header section containing the main title and subtitle */}
      <header className="counter-header">
        <h1>Islamabad International Airport</h1>
        <p>Interactive Counter & State Management System</p>
      </header>

      {/* Main content body containing the counter card interface */}
      <main className="counter-main">
        
        {/* Card wrapper for centering and styling the counter elements */}
        <div className="counter-card">
          <h2>Passenger Count Tracker</h2>
          
          {/* Display box showing the current numeric count value */}
          <div className="display-box">
            <span className="count-number">{count}</span>
          </div>
          
          {/* Button group container holding decrease and increase action buttons */}
          <div className="btn-group">
            
            {/* Button triggering the handleDecrement function on click */}
            <button className="btn-decrement" onClick={handleDecrement}>
              Decrease (-)
            </button>
            
            {/* Button triggering the handleIncrement function on click */}
            <button className="btn-increment" onClick={handleIncrement}>
              Increase (+)
            </button>
          
          </div>
        </div>
      
      </main>

      {/* Footer section displaying copyright and system information */}
      <footer className="counter-footer">
        <p>&copy; 2026 Islamabad International Airport. Built with React.</p>
      </footer>
    
    </div>
  );
}