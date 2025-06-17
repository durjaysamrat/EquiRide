# 🐎 EquiRide – Real-Time Horse-Riding Booking Platform
![Node.js](https://img.shields.io/badge/Node.js-v18-green)
![MongoDB](https://img.shields.io/badge/MongoDB-v6.0-brightgreen)
![License](https://img.shields.io/github/license/durjaysamrat/EquiRide)

![EquiRide Banner](./banner.jpg) <!-- Optional: Add a real image/GIF of your project UI -->

**Live Demo**: [Watch on YouTube](https://youtu.be/h2RQVlNBfqU)  
📁 **Repository**: [GitHub Repo](https://github.com/durjaysamrat/EquiRide)  
🧠 Built as part of a production-grade system during my internship.

---

## 📌 Overview

**EquiRide** is a full-stack web platform designed to manage real-time horse-riding session bookings. Developed for a live client during my internship, this project simulates a production-grade system complete with user authentication, admin workflows, session tracking, and booking management.

The open-source version mirrors the architecture used in the live product (deployed for actual horse-riding academies), minus private modules like AI demand prediction, payment gateway, and OTP login.

---

## ⚙️ Tech Stack

| Layer         | Technologies                          |
|---------------|----------------------------------------|
| Frontend      | EJS Templates, Bootstrap 5, DataTables |
| Backend       | Node.js, Express.js                    |
| Database      | MongoDB Atlas, Mongoose                |
| Auth & Flash  | express-session, connect-flash         |
| Deployment    | Render / Railway ready (`.env` config) |

---

## ✨ Features

✅ User Registration & Login (Flash Messaging & Sessions)  
✅ Real-Time Booking Engine for Ride Scheduling  
✅ Admin Panel to Manage and View All Registrations  
✅ Booking Confirmation, Error Handling & Flash Alerts  
✅ Fully Responsive UI with DataTables Integration  
✅ MongoDB-Powered Backend with Mongoose ORM  
✅ Private Email-Based Session Tracking (Production Version)  
✅ Deployment-Ready (`.env` Config + Cloud-DB Integration)

---

## 🔐 Intern-Level Real-World Additions (Not Open-Sourced)

> Part of this project was implemented in a real deployment with:
- 🔒 OTP-based secure authentication
- 🤖 AI-based ride demand prediction
- 💳 Razorpay integration for online payments

*(Excluded here due to licensing and security concerns)*

---

## 🧑‍💻 Project Highlights

- Designed a fully functional booking system from scratch using **Express.js and MongoDB Atlas**.
- Integrated **session tracking** and flash-based alerts for better user experience.
- Built a responsive, clean UI with **Bootstrap 5** and **DataTables**.
- Applied **environment variable-based configs** for smooth CI/CD and deployment.
- Followed modular architecture and MVC principles to ensure maintainability and scalability.

---

## 🛠 How to Run Locally

```bash
# Clone the repository
git clone https://github.com/durjaysamrat/EquiRide.git
cd EquiRide

# Install dependencies
npm install
