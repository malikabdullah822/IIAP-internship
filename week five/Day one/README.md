# IIAP Internship - Enterprise React Portal (Week 3 - Day 1)

A professional, responsive React CRUD (Create, Read, Update, Delete) application developed as part of the IT web development internship assignments at the **Pakistan Airports Authority (Islamabad International Airport)**. This application demonstrates controlled inputs, form state management, custom Regex validation, live search filtering, and browser persistent storage.

---

## 👨‍💻 Developer Profile
* **Name:** Abdullah
* **Role:** IT Web Development Intern
* **Organization:** Pakistan Airports Authority (Islamabad International Airport)

---

## 📋 Day 1 Task & Core Requirements Covered

* **Controlled Inputs:** Managed form state cleanly using React `useState` hooks where every input value is controlled by component state.
* **Controlled vs Uncontrolled Inputs:** Implemented explicit state bindings (`value` and `onChange`) to handle input data predictably.
* **State Management for Form Fields:** Handled multiple form fields (`fullName`, `emailAddress`, `userRole`) efficiently in a single state object.
* **Project Architecture & Component Planning:** Structured application features, component logic, and modular styling.
* **Folder Structure Scaffolding:** Clean setup with Vite, React, and modular stylesheet (`App.css`).

---

## ✨ Key Features & Functionality

* **Strict Email Validation (Regex):** 
  * Verifies proper email structure (`[name]@[domain].[extension]`).
  * Explicitly disallows spaces and prohibited patterns such as double dots (`..`) to ensure data accuracy.
* **Full CRUD Operations:**
  * **Create:** Register new participant or intern records.
  * **Read:** Display registered users dynamically inside a structured directory list.
  * **Update:** Seamlessly load existing records back into the form to edit and update details.
  * **Delete:** Remove unwanted records from the database state with real-time UI synchronization.
* **Live Search Filtering:** Real-time search query filtering allowing users to instantly search records by name, email, or department.
* **Persistent Storage (LocalStorage):** Automatically syncs and saves all records using browser `localStorage` and `useEffect` hooks so data is retained across page refreshes.
* **Interactive UI/UX:** Clean status counters, editing mode indicators, success notification banners, and smooth scrolling.

---

## 🛠️ Tech Stack

* **Frontend Library:** React (Vite)
* **Styling:** Custom Modular CSS (`App.css`)
* **State & Effects:** React Hooks (`useState`, `useEffect`)
* **Storage:** Browser LocalStorage API
* **Version Control:** Git & GitHub (`IIAP-internship` repository)

---

## 🚀 Getting Started & Installation

Follow these steps to run the project locally on your machine:

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/your-username/IIAP-internship.git](https://github.com/your-username/IIAP-internship.git)