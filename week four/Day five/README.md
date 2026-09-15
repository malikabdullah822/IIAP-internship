# Islamabad International Airport - Comprehensive Flight Control Center (Week 4, Day 5 Capstone)

A feature-rich React application developed as the capstone project for Week 4 of the IT Web Development Internship program at Islamabad International Airport. This project successfully integrates modular component design, prop passing, conditional rendering, list iteration via `.map()`, unique key management, and real-time stateful search filtering into a unified dashboard.

---

## 🚀 Project Overview
The **Comprehensive Flight Control Center** serves as an advanced master control panel for airport operations. It splits functionality into two major operational views:
1. **Priority & Featured Flights Section:** Showcases high-priority and VIP flights using dedicated child components (`FlightCard`), custom props, and dynamic conditional styling.
2. **Live Master Schedule & Search Filter Section:** Displays a comprehensive tabular data feed using dynamic list rendering (`.map()`), unique keys, and interactive client-side search filtering (`useState`).

---

## 📚 Key Concepts Covered (Day 5 Capstone & Review)
1. **Component Composition:** Combining multiple independent components (`FlightCard` and `FlightTableRow`) inside a master parent component (`App`).
2. **Props & Dynamic Data Flow:** Passing structured data attributes downward from parent to child components.
3. **Advanced Conditional Rendering:** Utilizing ternary operators and logical `&&` operators to render status badges and VIP banners conditionally.
4. **List Rendering & Keys:** Rendering arrays cleanly with `.map()` and assigning stable, unique `key` props for optimal virtual DOM performance.
5. **State Management & Interactivity:** Implementing `useState` to capture user input and update data views instantly in real time.

---

## 🛠️ Tech Stack
* **Framework:** React.js (Powered by Vite)
* **State Management:** React Hooks (`useState`)
* **Styling:** Custom CSS3 (Flexbox layouts, responsive data tables, cards, badges, and search controls)
* **Version Control:** Git & GitHub
* **Development Tool:** Visual Studio Code

---

## ⚙️ Installation & Running Locally

Follow these steps to run the project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/malikabdullah822/IIAP-internship.git](https://github.com/malikabdullah822/IIAP-internship.git)