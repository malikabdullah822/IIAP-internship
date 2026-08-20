# Airport IT Internship - Week 2: Day 1 (JavaScript Foundation & DOM)

## Overview
Day 1 of Week 2 marks the transition into **JavaScript** and the **Document Object Model (DOM)**. This project demonstrates how JavaScript connects to HTML and CSS to create dynamic, interactive web applications rather than static pages.

---

## What I Learned & Accomplished Today
* **Introduction to JavaScript:** Understood how JavaScript acts as the programming language of the web to add logic, interactivity, and dynamic updates.
* **Variables & Data Types:** Learned how to store information using declaration keywords (`let`, `const`) and handled different data types like strings, numbers, and booleans.
* **Operators & Expressions:** Practiced mathematical operations (`+`) and expressions to calculate and evaluate values.
* **DOM Introduction:** Discovered what the Document Object Model is and how JavaScript uses it to interact with and modify HTML elements on the fly.
* **Adding JavaScript to a Page:** Explored script integration methods, placing an external script file (`script.js`) safely at the bottom of the body.
* **Hands-on Console & Events:** Logged variables, calculated values, and DOM structures to the browser console, while creating an interactive button click event to update the page dynamically.

---

## Project Structure
Your project folder contains the following three files:
1. **`index.html`**: Contains the markup structure, including an H1 heading, a status paragraph, an interactive button, and links to your stylesheets and script.
2. **`style.css`**: Contains custom CSS rules handling Flexbox centering, card surfaces, shadows, typography, and button hover transitions.
3. **`script.js`**: Contains JavaScript logic including variable definitions, server calculations, DOM element selectors, and click event listeners.

---

## Code Files Reference

### 1. HTML Code (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Week 2 - Day 1 JavaScript & DOM</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Main card container -->
    <div class="card">
        <h1 id="main-title">Airport IT Terminal</h1>
        <p id="status-text">System Status: Checking...</p>
        <button id="action-btn">Run Diagnostics</button>
    </div>

    <!-- External JavaScript file linked at the bottom of the body -->
    <script src="script.js"></script>
</body>
</html>