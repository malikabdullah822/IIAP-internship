// ==========================================
// 1. SELECTING DOM ELEMENTS
// ==========================================

// HTML file mein se 'click-btn' id wale button ko select karke aik constant variable mein save kar rahay hain
const clickBtn = document.querySelector("#click-btn");

// HTML file mein se 'counter-display' id wale span tag ko select kar rahay hain jahan number show hoga
const counterDisplay = document.querySelector("#counter-display");

// Aik variable bana rahay hain jiska naam 'clickCount' hai aur iski shuru ki value '0' rakhi hai
let clickCount = 0;


// ==========================================
// 2. ADDING EVENT LISTENER (Click Event)
// ==========================================

// Button ke upar aik event listener laga rahay hain jo 'click' hone ka intezaar karega
clickBtn.addEventListener("click", function() {
    
    // Jab bhi button par click hoga, yeh line 'clickCount' ki value mein 1 ka izafa (increment) kar degi
    clickCount++;

    // DOM ka use karke span tag ke andar ka text (`textContent`) naye update huye count se badal denge
    counterDisplay.textContent = clickCount;

    // Browser ke developer console mein aik message print karwayenge ke total kitne clicks ho chuke hain
    console.log("Check-in registered! Total count: " + clickCount);

});


// ==========================================
// 3. DEMONSTRATING LOOPS (While Loop)
// ==========================================

// Aik variable banaya jiski value 3 hai
let securityCheckpoints = 3;

// Yeh 'while' loop tab tak chalega jab tak 'securityCheckpoints' ki value 0 se bari hai
while (securityCheckpoints > 0) {
    
    // Loop ke har chakkar mein console par yeh message print hoga
    console.log("Security checkpoint " + securityCheckpoints + " is active.");
    
    // Har chakkar ke baad value mein 1 minus hoga taake aik waqt aaye aur loop khatam ho jaye
    securityCheckpoints--; 
}


// ==========================================
// 4. LOOPING OVER ARRAYS (List Loop)
// ==========================================

// Aik array (list) bana rahay hain jismein mukhtalif terminal gates ke naam store hain
let terminalGates = ["Gate A", "Gate B", "Gate C"];

// Console par aik heading print karwa rahay hain
console.log("--- Scanning Terminal Gates ---");

// Array ke andar mojood har aik gate par loop chalane ke liye '.forEach()' method use kar rahay hain
terminalGates.forEach(function(gate, index) {
    
    // Har gate ka index number aur uska naam utha kar console par status print karwa rahay hain
    console.log("Index " + index + ": " + gate + " status is operational.");
});