// ==========================================
// 1. SELECTING DOM ELEMENTS
// ==========================================

// Signup form element ko select kar rahay hain
const signupForm = document.querySelector("#signup-form");

// Username input field ko select kar rahay hain
const usernameInput = document.querySelector("#username");

// Password input field ko select kar rahay hain
const passwordInput = document.querySelector("#password");

// Feedback message show karne ke liye paragraph select kar rahay hain
const feedbackMsg = document.querySelector("#feedback-msg");


// ==========================================
// 2. FUNCTIONS (Declaration & Validation logic)
// ==========================================

// Aik function declaration bana rahay hain jo validation check karega
function validateFormInput(username, password) {
    
    // Check karein agar username khali hai ya password 6 harf se chota hai
    if (username === "" || password === "") {
        return "Error: All fields must be filled out!"; // Return error message
    } 
    else if (password.length < 6) {
        return "Error: Password must be at least 6 characters long!"; // Return error message
    } 
    else {
        return "Success: Staff registration approved!"; // Return success message
    }
}


// ==========================================
// 3. EVENT LISTENER (Submit Event)
// ==========================================

// Form par 'submit' event listener laga rahay hain
signupForm.addEventListener("submit", function(event) {
    
    // Page ko refresh honay se rokne ke liye preventDefault use karte hain
    event.preventDefault();

    // Input fields ki current values variable mein save kar rahay hain
    let enteredUser = usernameInput.value.trim();
    let enteredPass = passwordInput.value.trim();

    // Upar banaye gaye function ko call (argument pass) kar ke result hasil kar rahay hain
    let validationResult = validateFormInput(enteredUser, enteredPass);

    // Result ko HTML ke andar display kar rahay hain
    feedbackMsg.textContent = validationResult;

    // Condition ke hisab se text ka color badal rahay hain
    if (validationResult.startsWith("Success")) {
        feedbackMsg.style.color = "#28a745"; // Green color for success
    } else {
        feedbackMsg.style.color = "#d9534f"; // Red color for error
    }

});