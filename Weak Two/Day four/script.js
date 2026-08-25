// ==========================================
// 1. SELECTING DOM ELEMENTS
// ==========================================

// Select the main signup form element from the document
const signupForm = document.querySelector("#signup-form");

// Select the username input text field element
const usernameInput = document.querySelector("#username");

// Select the password input text field element
const passwordInput = document.querySelector("#password");

// Select the feedback paragraph element to show validation messages
const feedbackMsg = document.querySelector("#feedback-msg");


// ==========================================
// 2. FUNCTIONS (Declaration & Validation logic)
// ==========================================

// Declare a reusable function to evaluate and validate user form inputs
function validateFormInput(username, password) {
    
    // Check if either the username or password fields are left completely empty
    if (username === "" || password === "") {
        return "Error: All fields must be filled out!"; // Return error message
    } 
    // Check if the password length is shorter than the minimum required 6 characters
    else if (password.length < 6) {
        return "Error: Password must be at least 6 characters long!"; // Return error message
    } 
    // If all validation rules pass successfully, return the approval message
    else {
        return "Success: Staff registration approved!"; // Return success message
    }
}


// ==========================================
// 3. EVENT LISTENER (Submit Event)
// ==========================================

// Attach a submit event listener to the signup form element
signupForm.addEventListener("submit", function(event) {
    
    // Prevent the default browser form submission refresh behavior
    event.preventDefault();

    // Retrieve and trim current whitespace values from the username and password fields
    let enteredUser = usernameInput.value.trim();
    let enteredPass = passwordInput.value.trim();

    // Call the validation function, passing the input arguments and storing the result
    let validationResult = validateFormInput(enteredUser, enteredPass);

    // Display the resulting validation feedback text inside the DOM element
    feedbackMsg.textContent = validationResult;

    // Apply conditional text coloring depending on the result status
    if (validationResult.startsWith("Success")) {
        feedbackMsg.style.color = "#28a745"; // Green color for success status
    } else {
        feedbackMsg.style.color = "#d9534f"; // Red color for error status
    }

});