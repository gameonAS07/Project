Grocery Store Management Application 🛒
A Grocery Store Management Application built as a group project by three BCA (Hons.) students. The project focuses on creating a responsive, functional, and smart web-based grocery management system that handles product listings, orders, and user interaction. The application uses Flask (Python) for the backend, MySQL for the database, and HTML/CSS/JS for the frontend, styled with a Material UI-inspired theme.

👨‍💻 Team Members

Aryan sareen

Akash Sharma
 
Tanish Sabharwaal

🧩 Problem Statement
Managing a grocery store manually can lead to inefficiencies such as poor inventory tracking, no real-time updates, and product wastage. This project aims to digitize and automate these processes via a user-friendly web application.

🎯 Objectives
Create a centralized web-based inventory and order management system.

Enable product listing, order placement, and dynamic updates.

Provide a modern, animated UI for enhanced user experience.

Ensure integration with a real-time backend and database.

Lay the foundation for AI-driven expiry prediction in future updates.

⚙️ Tools & Technologies Used
Frontend: HTML, CSS, JavaScript (Material UI theme)

Backend: Python (Flask)

Database: MySQL

Libraries: flask, mysql-connector-python

Design Tools: Figma (for layout inspiration)

Version Control: Git & GitHub

📚 Libraries Used
flask

mysql-connector-python

datetime

json

os (if applicable)

Install using:
pip install flask mysql-connector-python

🧪 Folder Structure
Grocery_Store_Management_Application/
│
├── backend/
│   ├── server.py
│   ├── sql_connection.py
│   ├── products_dao.py
│   ├── orders_dao.py
│   └── venv/
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│
├── database/
│   └── grocery_store.sql
│
└── README.md

🚀 How to Run
Clone the repository
git clone https://github.com/your-username/Grocery_Store_Management_Application.git

Navigate to backend and set up environment
cd backend
python -m venv venv
venv\Scripts\activate  (for Windows)
source venv/bin/activate (for Linux/Mac)
pip install flask mysql-connector-python

Set up the database

Open MySQL client

Create database: grocery_store

Import the grocery_store.sql file

Run the Flask server
python server.py

Server starts at: http://localhost:5000

Open the frontend

Launch index.html in your browser

✨ Key Features
Product listing from MySQL database

Order placement and saving with timestamps

Dynamic and responsive frontend UI

Basic login/signup page

Material UI-inspired theme

Flask API endpoints for CRUD operations

🧭 Future Work
Admin dashboard with authentication

AI-based expiry prediction model

Auto-discount suggestion on near-expiry products

Inventory threshold alerts

Export reports (PDF/Excel)

Mobile app version

📝 Conclusion
This project gave our team a chance to explore full-stack development, backend integration, and teamwork. It represents a strong foundational structure that can evolve into a powerful, AI-enhanced inventory management system.
