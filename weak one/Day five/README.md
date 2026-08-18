# Airport IT Internship - Day 5 Capstone Project

## Overview
Day 5 serves as the capstone project for your foundational web development module. It brings together everything you learned over previous days—combining HTML structure, semantic layout planning, custom CSS styling, typography, navigation bars, and responsive design into a polished, professional static web page.

---

## What I Learned & Accomplished Today
* **Page Layout & Section Planning:** Mapped out the logical structure of a website using wireframing concepts before writing code.
* **Creating a Static Page:** Built a clean, modern HTML5 document that acts as a centralized dashboard portal.
* **Semantic HTML Elements:** Utilized proper structural tags like `<header>`, `<main>`, `<section>`, and `<footer>` to organize content meaningfully.
* **Navigation Bar Integration:** Applied Flexbox layout properties (`display: flex`, `justify-content: space-between`, `align-items: center`) to align brand logos and menu links smoothly.
* **Polishing Typography & Spacing:** Fine-tuned text sizing, line heights (`line-height`), margins, and padding for optimal readability and visual hierarchy.
* **Self-Review:** Validated code structure, spacing, and styling to ensure it meets professional web design criteria.

---

## Project Structure
Your project folder contains the following files:
1. **`index.html`**: Contains the core markup, navigation links, hero banner, system overview, and infrastructure services list.
2. **`style.css`**: Contains custom CSS rules handling the Flexbox sticky layout, card styling, typography, hover transitions, and color themes.

---

## Code Files Reference

### 1. HTML Code (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 5 Capstone - Airport IT Portal</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Top Navigation Bar -->
    <header class="navbar">
        <div class="logo">Airport IT Operations</div>
        <nav class="nav-links">
            <a href="index.html">Home</a>
            <a href="#about">Overview</a>
            <a href="#services">Services</a>
        </nav>
    </header>

    <!-- Main Content Wrapper -->
    <main class="main-container">
        
        <!-- Hero Section -->
        <section class="hero-section">
            <h1>Airport IT Internship - Day 5 Capstone</h1>
            <p class="subtitle">Bringing together layouts, typography, navigation, and styling into a polished static page.</p>
        </section>

        <!-- System Overview Section -->
        <section id="about" class="content-section">
            <h2>System Overview</h2>
            <p>This static portal serves as a centralized management dashboard for tracking technical operations, runway communication lines, and structural maintenance records across the facility.</p>
        </section>

        <!-- Core Infrastructure Services Section -->
        <section id="services" class="content-section">
            <h2>Core Infrastructure Services</h2>
            <ul class="service-list">
                <li>High-speed fiber optic network monitoring</li>
                <li>Automated baggage tracking system terminals</li>
                <li>Cybersecurity perimeter firewall diagnostics</li>
            </ul>
        </section>

    </main>

    <!-- Page Footer -->
    <footer class="footer">
        <p>&copy; 2026 Airport IT Department. All rights reserved.</p>
    </footer>

</body>
</html>