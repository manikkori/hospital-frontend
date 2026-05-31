# 🏥 City Hospital - Management & Booking Portal

Welcome to the **City Hospital Portal** – a premium, fully responsive Full-Stack web application designed to digitize patient management, streamline appointment bookings, and provide a secure administrative dashboard.

## 🚀 Overview

This project serves as a complete digital solution for modern healthcare facilities. It allows patients to explore hospital departments, view services, and easily book appointments or send inquiries online. For the hospital staff, it provides a secure, private dashboard to manage patient leads in real-time.

## ✨ Key Features

* **📱 100% Mobile Responsive:** A modern, beautifully crafted UI that works flawlessly across desktops, tablets, and mobile devices.
* **📅 Direct Appointment Booking:** Integrated contact forms allowing patients to submit inquiries and their contact details directly to the hospital.
* **🔒 Secure Admin Dashboard:** A protected route for receptionists and admins to view, manage, and directly call patient leads with a single click.
* **⚡ Blazing Fast UI:** Built with Vite and React for a smooth, single-page application experience.
* **☁️ Cloud Database:** Real-time data storage and retrieval using MongoDB Atlas.

## 🛠️ Tech Stack

**Frontend (Client):**
* React.js (Vite)
* Tailwind CSS (for modern & responsive styling)
* Lucide React (for premium iconography)
* React Router DOM
* Vercel (Deployed Platform)

**Backend (Server):**
* Node.js
* Express.js
* MongoDB & Mongoose (Database & Schema Modeling)
* Cors & Dotenv
* Render (Deployed Platform)

## ⚙️ Installation & Local Setup

To run this decoupled architecture locally, follow these steps:

**1. Clone the repository:**
`bash
git clone https://github.com/your-username/city-hospital.git
cd city-hospital
`

**2. Setup the Backend:**
`bash
cd backend
npm install
`
*Create a `.env` file in the backend directory and add your MongoDB connection string:*
`env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
`
`bash
npm start
`

**3. Setup the Frontend:**
Open a new terminal window and navigate to the frontend directory:
`bash
cd frontend
npm install
npm run dev
`

**4. Open your browser:**
Navigate to `http://localhost:5173` to view the frontend. The frontend will communicate with the backend running on `http://localhost:5000`.

## 📂 Project Structure (Decoupled)

The project follows a Monorepo style structure with strictly separated frontend and backend environments:
* `/frontend` - Contains all React components, pages, and Tailwind configurations.
* `/backend` - Contains the Express server, API routes, and Mongoose models.

## 👨‍💻 Developed By

**Manik Kori** 
Full-Stack Web Developer

---
*If this project helped you, please consider giving it a ⭐ on GitHub!*
