# Airport IT Internship - Week 2: Day 2 (Conditions, Switches, and Selectors)

## Overview
Day 2 of Week 2 focuses on advanced JavaScript control structures and Document Object Model (DOM) selection techniques. This hands-on session builds an interactive airport terminal operations dashboard that evaluates real-time data, checks security clearance tiers, and dynamically updates multiple UI elements.

---

## Topics Covered
* **Conditions (`if`, `else if`, `else`):** Executing logical blocks based on time-based shift checks.
* **Nested Conditions:** Evaluating multi-layered permissions for airport security levels.
* **Switch Statements:** Handling multiple specific terminal routing codes efficiently.
* **DOM Selectors (`querySelector` vs `querySelectorAll`):** Targeting single unique elements and looping through NodeLists.

---

## Code Files Reference

### 1. HTML Code (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Airport IT Internship - Week 2: Day 2</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1 id="main-title">Airport Terminal Operations</h1>
    <p id="status-display">System status pending check...</p>

    <button id="action-btn">Run Diagnostics</button>

    <div class="gate-status">Gate 1: Standby</div>
    <div class="gate-status">Gate 2: Standby</div>
    <div class="gate-status">Gate 3: Standby</div>

    <script src="script.js"></script>
</body>
</html>