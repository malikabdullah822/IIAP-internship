// Import the useState hook from React to manage component state and data reactivity
import { useState } from 'react';

// Import the external CSS stylesheet for modern styling and animations
import './App.css';

// Define and export the main React functional component for the registration portal
export default function App() {

  // Initialize form data state object to hold multi-field controlled input values
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    employeeId: '',
    department: 'Aviation Office',
    shiftTiming: 'Morning'
  });

  // Initialize state array to store the collection of submitted registration records
  const [submittedRecords, setSubmittedRecords] = useState([]);

  // Initialize edit index state to track whether we are adding a new record or updating (-1 means new)
  const [editIndex, setEditIndex] = useState(-1);

  // Initialize notification state object to manage dynamic error or success feedback banners
  const [feedbackMessage, setFeedbackMessage] = useState({ text: '', type: '' });

  // Input change handler function to wire controlled inputs to the component state
  const handleInputChange = (event) => {
    // Extract the name attribute and current value from the target input element
    const { name, value } = event.target;
    
    // Update the specific field immutably inside the formData state object using the spread operator
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Form submission handler function incorporating event prevention and comprehensive validation checks
  const handleFormSubmit = (event) => {
    // Prevent the default browser page reload behavior upon form submission
    event.preventDefault();

    // Required field validation check to ensure no mandatory input is left blank
    if (!formData.fullName.trim() || !formData.emailAddress.trim() || !formData.employeeId.trim()) {
      setFeedbackMessage({ text: 'Validation Error: All required fields must be filled out!', type: 'error' });
      return;
    }

    // Pattern format validation for Full Name (checking minimum length of 3 characters)
    if (formData.fullName.trim().length < 3) {
      setFeedbackMessage({ text: 'Validation Error: Full Name must be at least 3 characters long!', type: 'error' });
      return;
    }

    // Pattern format validation using Regular Expression for strict Gmail address format
    const strictGmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!strictGmailPattern.test(formData.emailAddress)) {
      setFeedbackMessage({ text: 'Validation Error: Enter a valid email ending strictly with @gmail.com!', type: 'error' });
      return;
    }

    // Pattern format validation for Employee ID (checking exact format like EMP-XXXX)
    const employeeIdPattern = /^EMP-\d{4}$/;
    if (!employeeIdPattern.test(formData.employeeId)) {
      setFeedbackMessage({ text: 'Validation Error: Employee ID must follow the pattern EMP-XXXX (e.g., EMP-1024)!', type: 'error' });
      return;
    }

    // Check if the application is in edit mode or create mode
    if (editIndex !== -1) {
      // Create a copy of the records array and update the specific indexed entry during edit mode
      const updatedRecords = [...submittedRecords];
      updatedRecords[editIndex] = formData;
      setSubmittedRecords(updatedRecords);
      setEditIndex(-1);
      setFeedbackMessage({ text: 'Success: Participant record updated successfully!', type: 'success' });
    } else {
      // Add the new validated form data record to the beginning of the submitted records collection array
      setSubmittedRecords((prevRecords) => [formData, ...prevRecords]);
      setFeedbackMessage({ text: 'Success: Form submitted and validated successfully!', type: 'success' });
    }

    // Reset form input fields back to their initial default state values after successful submission
    setFormData({
      fullName: '',
      emailAddress: '',
      employeeId: '',
      department: 'Aviation Office',
      shiftTiming: 'Morning'
    });

    // Automatically clear the feedback banner message after 4 seconds using a timer timeout
    setTimeout(() => {
      setFeedbackMessage({ text: '', type: '' });
    }, 4000);
  };

  // Delete record handler function to remove a specific submission entry based on its array index
  const handleDeleteRecord = (indexToDelete) => {
    // Filter out the record matching the target index from the submitted records collection state
    setSubmittedRecords(submittedRecords.filter((_, index) => index !== indexToDelete));
    
    // Trigger deletion feedback success banner notification message
    setFeedbackMessage({ text: 'Notification: Record deleted successfully!', type: 'error' });
    setTimeout(() => {
      setFeedbackMessage({ text: '', type: '' });
    }, 3000);
  };

  // Edit record handler function to load an existing record back into the controlled form inputs
  const handleEditRecord = (indexToEdit) => {
    // Populate the formData state with the selected record values for inline editing
    setFormData(submittedRecords[indexToEdit]);
    
    // Set the editIndex state tracker to identify which record is currently being modified
    setEditIndex(indexToEdit);
  };

  // Return the JSX markup rendering the complete interactive portal interface
  return (
    <div className="portal-container">
      
      {/* Application header title element */}
      <h2 className="portal-title">IIAP Internship - Week 5 Portal</h2>
      
      {/* Subtitle description covering Days 1, 2, and 3 concepts */}
      <p className="portal-subtitle">Controlled Inputs, Form Submission, Strict Validation, and CRUD Operations</p>

      {/* Conditional rendering for styled feedback banners (Errors vs Success notifications) */}
      {feedbackMessage.text && (
        <div className={feedbackMessage.type === 'error' ? 'error-banner' : 'success-banner'}>
          {feedbackMessage.text}
        </div>
      )}

      {/* Main form component wired with onSubmit event listener and preventDefault execution */}
      <form onSubmit={handleFormSubmit} className="portal-form">
        
        {/* Dynamic form section heading reflecting current mode (Registration vs Edit) */}
        <h3 className="form-heading">
          {editIndex !== -1 ? 'Edit Participant Record' : 'Participant Validation & Registration Form'}
        </h3>

        {/* Controlled input field for Full Name */}
        <div className="input-group">
          <label>Full Name *:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter full name (min 3 chars)"
          />
        </div>

        {/* Controlled input field for Email Address with strict format validation */}
        <div className="input-group">
          <label>Email Address *:</label>
          <input
            type="text"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
            placeholder="user@gmail.com"
          />
        </div>

        {/* Controlled input field for Employee ID with regex pattern validation */}
        <div className="input-group">
          <label>Employee ID *:</label>
          <input
            type="text"
            name="employeeId"
            value={formData.employeeId}
            onChange={handleInputChange}
            placeholder="EMP-XXXX"
          />
        </div>

        {/* Read-only controlled input field locking the Airport Department designation */}
        <div className="input-group">
          <label>Airport Department:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            readOnly
            className="readonly-input"
          />
        </div>

        {/* Controlled select dropdown component for shift timing selection */}
        <div className="input-group">
          <label>Shift Timing:</label>
          <select
            name="shiftTiming"
            value={formData.shiftTiming}
            onChange={handleInputChange}
          >
            <option value="Morning">Morning Shift</option>
            <option value="Evening">Evening Shift</option>
            <option value="Night">Night Shift</option>
          </select>
        </div>

        {/* Form submission action button switching text based on edit mode state */}
        <button type="submit" className="submit-btn save">
          {editIndex !== -1 ? 'Update Record Entry' : 'Submit & Validate Form'}
        </button>

      </form>

      {/* Directory section displaying submitted records collection list */}
      <div className="directory-section">
        <h3>Submitted Records Directory ({submittedRecords.length})</h3>

        {/* Conditional rendering check if submitted records collection array is empty */}
        {submittedRecords.length === 0 ? (
          <p className="no-data">No valid form submissions recorded yet.</p>
        ) : (
          <ul className="user-list">
            {/* Map through the submittedRecords array collection to render individual cards */}
            {submittedRecords.map((record, index) => (
              <li key={index} className="user-card">
                <div>
                  <strong className="user-name">{record.fullName}</strong>
                  <div className="user-details">
                    {record.emailAddress} | ID: {record.employeeId} | <em>{record.department}</em> ({record.shiftTiming} Shift)
                  </div>
                </div>

                {/* Action buttons container for Edit and Delete operations */}
                <div className="action-buttons">
                  <button type="button" className="edit-btn" onClick={() => handleEditRecord(index)}>Edit</button>
                  <button type="button" className="delete-btn" onClick={() => handleDeleteRecord(index)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}