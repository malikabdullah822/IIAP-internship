// Import useState hook from React library for managing local state and component reactivity
import { useState } from 'react';

// Import external CSS stylesheet for styling layout, components, and mobile responsiveness
import './App.css';

/**
 * Child Component: FormComponent
 * Task/Topic: Organizing components, handling input fields, and triggering parent submission via props
 */
function FormComponent({ formData, handleInputChange, handleFormSubmit, editIndex }) {
  return (
    // Form element listening to onSubmit event for creating or updating records
    <form onSubmit={handleFormSubmit} className="portal-form">
      {/* Dynamic heading changing based on creation mode or refactored edit mode */}
      <h3 className="form-heading">
        {editIndex !== -1 ? 'Edit Airport Staff Record' : 'Staff Registration & Validation Form'}
      </h3>

      {/* Input container for Full Name */}
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

      {/* Input container for Email Address */}
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

      {/* Input container for Employee ID */}
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

      {/* Input container for read-only department field */}
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

      {/* Input container for shift timing dropdown selection */}
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

      {/* Submit button with dynamic text for adding or updating */}
      <button type="submit" className="submit-btn">
        {editIndex !== -1 ? 'Update Staff Record' : 'Submit & Validate Form'}
      </button>
    </form>
  );
}

/**
 * Child Component: DirectoryComponent
 * Task/Topic: Connecting components together to display list of records and manage CRUD actions
 */
function DirectoryComponent({ records, handleEditRecord, handleDeleteRecord }) {
  return (
    // Directory container section
    <div className="directory-section">
      {/* Section title showing total record count */}
      <h3>Registered Staff Directory ({records.length})</h3>

      {/* Conditional rendering if no records exist */}
      {records.length === 0 ? (
        <p className="no-data">No staff records registered yet.</p>
      ) : (
        <ul className="user-list">
          {/* Mapping through records array to render individual items */}
          {records.map((record, index) => (
            <li key={index} className="user-card">
              <div className="card-info">
                <strong className="user-name">{record.fullName}</strong>
                <div className="user-details">
                  {record.emailAddress} | ID: {record.employeeId} | <em>{record.department}</em> ({record.shiftTiming})
                </div>
              </div>

              {/* Action buttons wrapper for Edit and Delete CRUD operations */}
              <div className="action-buttons">
                <button type="button" className="edit-btn" onClick={() => handleEditRecord(index)}>Edit</button>
                <button type="button" className="delete-btn" onClick={() => handleDeleteRecord(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * Parent Component: App
 * Task/Topic: Project structure, lifting state up, managing hooks, and coordinating all components together
 */
export default function App() {
  // State hook for managing form inputs object
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    employeeId: '',
    department: 'Aviation Office',
    shiftTiming: 'Morning'
  });

  // State hook for storing the list of submitted records array
  const [submittedRecords, setSubmittedRecords] = useState([]);

  // State hook for tracking index of record being edited (-1 means not in edit mode)
  const [editIndex, setEditIndex] = useState(-1);

  // State hook for handling alert feedback messages
  const [feedbackMessage, setFeedbackMessage] = useState({ text: '', type: '' });

  // Function to handle controlled input changes dynamically
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle form validation and submission (Lifting State Up execution)
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Check if required fields are filled
    if (!formData.fullName.trim() || !formData.emailAddress.trim() || !formData.employeeId.trim()) {
      setFeedbackMessage({ text: 'Validation Error: All required fields must be filled!', type: 'error' });
      return;
    }

    // Check minimum length for full name
    if (formData.fullName.trim().length < 3) {
      setFeedbackMessage({ text: 'Validation Error: Full Name must be at least 3 characters long!', type: 'error' });
      return;
    }

    // Validate email pattern to strictly end with @gmail.com
    const strictGmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!strictGmailPattern.test(formData.emailAddress)) {
      setFeedbackMessage({ text: 'Validation Error: Email must end strictly with @gmail.com!', type: 'error' });
      return;
    }

    // Validate employee ID format matching EMP-XXXX pattern
    const employeeIdPattern = /^EMP-\d{4}$/;
    if (!employeeIdPattern.test(formData.employeeId)) {
      setFeedbackMessage({ text: 'Validation Error: Employee ID must follow pattern EMP-XXXX!', type: 'error' });
      return;
    }

    // Check whether updating an existing record or adding a new one
    if (editIndex !== -1) {
      const updatedRecordsList = [...submittedRecords];
      updatedRecordsList[editIndex] = formData;
      setSubmittedRecords(updatedRecordsList);
      setEditIndex(-1);
      setFeedbackMessage({ text: 'Success: Staff record updated successfully!', type: 'success' });
    } else {
      setSubmittedRecords((prev) => [formData, ...prev]);
      setFeedbackMessage({ text: 'Success: Staff record registered successfully!', type: 'success' });
    }

    // Reset form fields back to default initial state
    setFormData({
      fullName: '',
      emailAddress: '',
      employeeId: '',
      department: 'Aviation Office',
      shiftTiming: 'Morning'
    });

    // Automatically clear feedback banner after 4 seconds
    setTimeout(() => setFeedbackMessage({ text: '', type: '' }), 4000);
  };

  // Function to delete a record from the list array
  const handleDeleteRecord = (indexToDelete) => {
    setSubmittedRecords(submittedRecords.filter((_, idx) => idx !== indexToDelete));
    setFeedbackMessage({ text: 'Notification: Record deleted successfully!', type: 'error' });
    setTimeout(() => setFeedbackMessage({ text: '', type: '' }), 3000);
  };

  // Function to load a record into form fields for editing
  const handleEditRecord = (indexToEdit) => {
    setFormData(submittedRecords[indexToEdit]);
    setEditIndex(indexToEdit);
  };

  return (
    // Main container wrapping the entire application layout
    <div className="portal-container">
      <h2 className="portal-title">IIAP Internship - Day 4 Portal</h2>
      <p className="portal-subtitle">Project Structure, Lifting State Up & Component Refactoring</p>

      {/* Conditional rendering for feedback alert message banner */}
      {feedbackMessage.text && (
        <div className={feedbackMessage.type === 'error' ? 'error-banner' : 'success-banner'}>
          {feedbackMessage.text}
        </div>
      )}

      {/* Rendering Form Component and passing necessary props */}
      <FormComponent
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        editIndex={editIndex}
      />

      {/* Rendering Directory Component and passing necessary props */}
      <DirectoryComponent
        records={submittedRecords}
        handleEditRecord={handleEditRecord}
        handleDeleteRecord={handleDeleteRecord}
      />
    </div>
  );
}