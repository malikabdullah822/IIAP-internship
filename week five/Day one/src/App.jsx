// Import the useState and useEffect hooks from the React library for state management and side effects
import { useState, useEffect } from 'react';

// Import the external CSS stylesheet for styling the application component
import './App.css';

// Define and export the main enterprise-grade React functional component for the application
export default function App() {

  // Initialize form input data state with empty strings for full name, email, and user role
  const [formData, setFormData] = useState({ fullName: '', emailAddress: '', userRole: '' });

  // Initialize state to store validation error messages for each individual form field
  const [errors, setErrors] = useState({});

  // Initialize submitted users array state by reading from browser LocalStorage or defaulting to an empty array
  const [submittedUsers, setSubmittedUsers] = useState(() => {
    // Retrieve saved user records string from LocalStorage using a unique storage key
    const savedUsers = localStorage.getItem('iiap_registered_users');
    // Parse the JSON string back into an array if data exists, otherwise return an empty array
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  // Initialize state to track the index of the user currently being edited (null means create mode)
  const [editIndex, setEditIndex] = useState(null);

  // Initialize state to manage the live search query input string for filtering records
  const [searchQuery, setSearchQuery] = useState('');

  // Initialize state to manage success notification banner text and visibility status
  const [successMessage, setSuccessMessage] = useState('');

  // Use useEffect hook to save the submittedUsers array to LocalStorage whenever the array changes
  useEffect(() => {
    // Convert the users array to a JSON string and store it in browser LocalStorage
    localStorage.setItem('iiap_registered_users', JSON.stringify(submittedUsers));
  }, [submittedUsers]); // Dependency array ensures this runs only when submittedUsers state updates

  // Define input change handler function to dynamically update form state as the user types
  const handleInputChange = (event) => {
    // Extract the 'name' attribute and 'value' from the target input element using object destructuring
    const { name, value } = event.target;
    // Update the specific property inside the formData state object immutably using the spread operator
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // Clear the error message for that specific field dynamically when the user starts typing again
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  // Define form validation function to check input validity and return an error object
  const validateForm = () => {
    // Initialize an empty local object to store any validation errors found
    let newErrors = {};

    // Check if the full name field is empty or contains only whitespace
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    
    // Define a professional Regular Expression (Regex) pattern for strict email format verification
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Check if email address is empty, or fails the Regex test, or contains prohibited double dots (..)
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required.';
    } else if (!emailRegex.test(formData.emailAddress) || formData.emailAddress.includes('..')) {
      newErrors.emailAddress = 'Invalid email! Please enter a valid email address (e.g. user@gmail.com).';
    }

    // Check if the user role or department field is empty
    if (!formData.userRole.trim()) newErrors.userRole = 'Role / Department is required.';

    // Return the completed error object containing any validation failure messages
    return newErrors;
  };

  // Define form submission handler function for handling both new registrations and record updates
  const handleSubmit = (event) => {
    // Prevent the default browser page reload behavior when a form is submitted
    event.preventDefault();

    // Run form validation checks and store the resulting error object in a variable
    const validationErrors = validateForm();

    // Check if there are any validation errors (i.e. error object has keys)
    if (Object.keys(validationErrors).length > 0) {
      // Update the errors state with the validation errors and abort submission
      setErrors(validationErrors);
      return;
    }

    // Check if we are currently in edit mode (editIndex is not null)
    if (editIndex !== null) {
      // Create a shallow copy of the submittedUsers array
      const updatedUsers = [...submittedUsers];
      // Replace the old user object at the specific editIndex with the new formData
      updatedUsers[editIndex] = formData;
      // Update the submittedUsers state with the modified array
      setSubmittedUsers(updatedUsers);
      // Reset editIndex back to null to exit edit mode
      setEditIndex(null);
      // Set a success message indicating changes were successfully updated
      setSuccessMessage('Changes successfully updated!');
    } else {
      // If not editing, add the new user object to the beginning of the submittedUsers array
      setSubmittedUsers((prevUsers) => [formData, ...prevUsers]);
      // Set a success message indicating successful new participant registration
      setSuccessMessage('Participant successfully registered and saved to database!');
    }

    // Reset the form input fields back to their initial empty string values
    setFormData({ fullName: '', emailAddress: '', userRole: '' });

    // Set a timeout timer to clear the success message banner automatically after 4 seconds
    setTimeout(() => setSuccessMessage(''), 4000);
  };

  // Define function to load an existing user's data into the form for editing when Edit button is clicked
  const handleEditUser = (index) => {
    // Retrieve the user object from submittedUsers array using the provided index
    setFormData(submittedUsers[index]);
    // Set the editIndex state to track which user is currently being edited
    setEditIndex(index);
    // Clear any active field errors when switching into edit mode
    setErrors({});
    // Smoothly scroll the browser window up to the top of the page to view the form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Define function to delete a specific registered user from the list array based on index
  const handleDeleteUser = (indexToRemove) => {
    // Filter out the user item whose index matches the indexToRemove parameter
    setSubmittedUsers((prevUsers) => prevUsers.filter((_, index) => index !== indexToRemove));
    // Check if the user currently being edited is the one being deleted
    if (editIndex === indexToRemove) {
      // Reset editIndex and clear the form fields if the active edit record is deleted
      setEditIndex(null);
      setFormData({ fullName: '', emailAddress: '', userRole: '' });
      setErrors({});
    }
  };

  // Filter the submittedUsers array dynamically based on the live search query string (case-insensitive)
  const filteredUsers = submittedUsers.filter((user) =>
    user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.emailAddress.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.userRole.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Return the JSX markup to render the user interface inside the browser DOM
  return (
    <div className="portal-container">
      
      {/* Main application header title */}
      <h2 className="portal-title">IIAP Internship - Enterprise React Portal</h2>
      
      {/* Subtitle description text */}
      <p className="portal-subtitle">Islamabad International Airport - Full CRUD Form Management</p>
      
      {/* Container for dashboard statistical counter cards */}
      <div className="stats-container">
        
        {/* Total registered count display card */}
        <div className="stat-card blue">
          <div className="stat-number">{submittedUsers.length}</div>
          <div className="stat-label">Total Registered</div>
        </div>

        {/* System status display card changing color and text based on edit mode */}
        <div className={`stat-card ${editIndex !== null ? 'yellow' : 'green'}`}>
          <div className="stat-number-text">{editIndex !== null ? 'Editing Mode' : 'Active'}</div>
          <div className="stat-label">System Status</div>
        </div>

      </div>

      {/* Conditional rendering of success notification banner if successMessage exists */}
      {successMessage && <div className="success-banner">{successMessage}</div>}

      {/* Main user registration and update form element */}
      <form onSubmit={handleSubmit} className="portal-form">
        
        {/* Dynamic form heading changing text based on whether editing or registering */}
        <h3 className="form-heading">{editIndex !== null ? 'Update Participant Record' : 'Register New Participant'}</h3>
        
        {/* Input group container for Full Name field */}
        <div className="input-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter full name"
            className={errors.fullName ? 'input-error' : ''}
          />
          {/* Conditional rendering of error message for full name input */}
          {errors.fullName && <span className="error-text">{errors.fullName}</span>}
        </div>

        {/* Input group container for Email Address field */}
        <div className="input-group">
          <label>Email / Gmail Address:</label>
          <input
            type="text"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
            placeholder="e.g. user@gmail.com"
            className={errors.emailAddress ? 'input-error' : ''}
          />
          {/* Conditional rendering of error message for email address input */}
          {errors.emailAddress && <span className="error-text">{errors.emailAddress}</span>}
        </div>

        {/* Input group container for Role / Department field */}
        <div className="input-group">
          <label>Role / Department:</label>
          <input
            type="text"
            name="userRole"
            value={formData.userRole}
            onChange={handleInputChange}
            placeholder="e.g. IT Intern / Web Developer"
            className={errors.userRole ? 'input-error' : ''}
          />
          {/* Conditional rendering of error message for role input */}
          {errors.userRole && <span className="error-text">{errors.userRole}</span>}
        </div>

        {/* Dynamic submit action button changing background color and text based on edit mode */}
        <button type="submit" className={`submit-btn ${editIndex !== null ? 'update' : 'save'}`}>
          {editIndex !== null ? 'Update Record' : 'Save to Database'}
        </button>

      </form>

      {/* Directory list section container */}
      <div className="directory-section">
        
        {/* Header containing directory title count and live search input field */}
        <div className="directory-header">
          <h3>Directory List ({filteredUsers.length})</h3>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search participants..."
            className="search-input"
          />
        </div>

        {/* Conditional rendering: if filtered array is empty, show empty message, otherwise render list */}
        {filteredUsers.length === 0 ? (
          <p className="no-data">No matching participant records found.</p>
        ) : (
          <ul className="user-list">
            {/* Map through the filteredUsers array to render each participant item */}
            {filteredUsers.map((user, index) => (
              <li key={index} className="user-card">
                
                {/* Display participant name, email, and role details */}
                <div>
                  <strong className="user-name">{user.fullName}</strong>
                  <div className="user-details">{user.emailAddress} | <em>{user.userRole}</em></div>
                </div>
                
                {/* Container for record action buttons (Edit and Delete) */}
                <div className="action-buttons">
                  <button onClick={() => handleEditUser(index)} className="edit-btn">Edit</button>
                  <button onClick={() => handleDeleteUser(index)} className="delete-btn">Delete</button>
                </div>

              </li>
            ))}
          </ul>
        )}

      </div>

    </div>
  );
}