// Task / Topic: Import useState hook from the React library for component state management
import { useState } from 'react';

// Task / Topic: Import the external CSS stylesheet for styling the application component
import './App.css';

// Task / Topic: Define and export the main React functional component for Day 2 form concepts
export default function App() {

  // Task / Topic: Initialize form state object to collect multiple field values with fixed Aviation Office department
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    userRole: '',
    department: 'Aviation Office',
    shiftTiming: 'Morning'
  });

  // Task / Topic: Initialize state to store the list of submitted records collection
  const [submittedRecords, setSubmittedRecords] = useState([]);

  // Task / Topic: Initialize state to manage edit mode tracking (-1 means not editing)
  const [editIndex, setEditIndex] = useState(-1);

  // Task / Topic: Initialize state to manage error or success notification messages
  const [message, setMessage] = useState({ text: '', type: '' });

  // Task / Topic: Define input change handler function to wire form state to component inputs
  const handleInputChange = (event) => {
    // Task / Topic: Extract name and value from the target input element
    const { name, value } = event.target;
    // Task / Topic: Update the specific field inside formData state immutably using spread operator
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Task / Topic: Define form submission handler with preventDefault and strict Gmail validation
  const handleFormSubmit = (event) => {
    // Task / Topic: Prevent default browser page reload behavior on form submission
    event.preventDefault();

    // Task / Topic: Validate if required form fields are filled before proceeding
    if (!formData.fullName || !formData.emailAddress || !formData.userRole || !formData.department) {
      setMessage({ text: 'Please fill out all required fields!', type: 'error' });
      return;
    }

    // Task / Topic: Strict validation check ensuring the email ends precisely with @gmail.com and has no trailing dots
    const strictGmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!strictGmailRegex.test(formData.emailAddress)) {
      setMessage({ text: 'Error: Please enter a valid Gmail address ending with @gmail.com (e.g., user@gmail.com)!', type: 'error' });
      return;
    }

    // Task / Topic: Check if we are updating an existing record or adding a new record
    if (editIndex !== -1) {
      // Task / Topic: Update the specific record in the array during edit mode
      const updatedRecords = [...submittedRecords];
      updatedRecords[editIndex] = formData;
      setSubmittedRecords(updatedRecords);
      setEditIndex(-1);
      setMessage({ text: 'Record successfully updated!', type: 'success' });
    } else {
      // Task / Topic: Add new form data record to the submittedRecords state array collection
      setSubmittedRecords((prevRecords) => [formData, ...prevRecords]);
      setMessage({ text: 'Form successfully submitted and collected!', type: 'success' });
    }

    // Task / Topic: Reset form input fields back to initial default values after submission (keeping Aviation Office fixed)
    setFormData({
      fullName: '',
      emailAddress: '',
      userRole: '',
      department: 'Aviation Office',
      shiftTiming: 'Morning'
    });

    // Task / Topic: Clear notification banner automatically after 4 seconds
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 4000);
  };

  // Task / Topic: Define delete record handler function to remove a submission entry
  const handleDeleteRecord = (indexToDelete) => {
    // Task / Topic: Filter out the record matching the specified index from submittedRecords array
    setSubmittedRecords(submittedRecords.filter((_, index) => index !== indexToDelete));
    // Task / Topic: Show deletion notification message banner
    setMessage({ text: 'Record successfully deleted!', type: 'error' });
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  // Task / Topic: Define edit record handler function to load existing data back into form inputs
  const handleEditRecord = (indexToEdit) => {
    // Task / Topic: Populate formData state with selected record values for editing
    setFormData(submittedRecords[indexToEdit]);
    // Task / Topic: Set the current edit index tracker state
    setEditIndex(indexToEdit);
  };

  // Task / Topic: Return the JSX markup rendering the main portal layout, form, and records list view
  return (
    <div className="portal-container">
      
      {/* Task / Topic: Application header title markup */}
      <h2 className="portal-title">IIAP Internship - Week 5 Day 2 Portal</h2>
      
      {/* Task / Topic: Subtitle description of core tasks covered in Day 2 */}
      <p className="portal-subtitle">Form Submission, preventDefault, State Wiring, and Edit/Delete Operations</p>

      {/* Task / Topic: Notification banner conditional rendering for success or error feedback */}
      {message.text && (
        <div className={message.type === 'error' ? 'error-banner' : 'success-banner'}>
          {message.text}
        </div>
      )}

      {/* Task / Topic: Main form component with onSubmit event listener and preventDefault wiring */}
      <form onSubmit={handleFormSubmit} className="portal-form">
        
        {/* Task / Topic: Form heading title showing active mode (Add vs Edit) */}
        <h3 className="form-heading">
          {editIndex !== -1 ? 'Edit Participant Record' : 'Participant Registration Form (Day 2)'}
        </h3>

        {/* Task / Topic: Full Name input field component wired to state */}
        <div className="input-group">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter full name"
          />
        </div>

        {/* Task / Topic: Email Address input field component with strict user@gmail.com format */}
        <div className="input-group">
          <label>Email Address:</label>
          <input
            type="text"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
            placeholder="user@gmail.com"
          />
        </div>

        {/* Task / Topic: Role / Designation input field component wired to state */}
        <div className="input-group">
          <label>Role / Designation:</label>
          <input
            type="text"
            name="userRole"
            value={formData.userRole}
            onChange={handleInputChange}
            placeholder="e.g. IT Web Intern"
          />
        </div>

        {/* Task / Topic: Airport Department input field set to readOnly so users cannot type extra characters */}
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

        {/* Task / Topic: Shift Timing select dropdown component wired to state */}
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

        {/* Task / Topic: Form submit button to trigger form collection or update */}
        <button type="submit" className="submit-btn save">
          {editIndex !== -1 ? 'Update Record' : 'Submit Form & Collect Data'}
        </button>

      </form>

      {/* Task / Topic: Submitted records collection listing section */}
      <div className="directory-section">
        <h3>Submitted Records Collection ({submittedRecords.length})</h3>

        {/* Task / Topic: Conditional check if records array collection is empty */}
        {submittedRecords.length === 0 ? (
          <p className="no-data">No form submissions recorded yet.</p>
        ) : (
          <ul className="user-list">
            {/* Task / Topic: Map through submittedRecords array collection to render list cards with Edit/Delete buttons */}
            {submittedRecords.map((record, index) => (
              <li key={index} className="user-card">
                <div>
                  <strong className="user-name">{record.fullName}</strong>
                  <div className="user-details">
                    {record.emailAddress} | <em>{record.userRole}</em> ({record.department} - {record.shiftTiming} Shift)
                  </div>
                </div>

                {/* Task / Topic: Action buttons container for Edit and Delete operations */}
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