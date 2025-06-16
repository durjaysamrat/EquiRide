# 🐎 EquiRide – Real-Time Horse-Riding Booking Platform

![EquiRide Banner](https://img.shields.io/badge/Full--Stack-Node%2BExpress%2BEJS-green)  
🚀 Live Demo: [Watch on YouTube](https://youtu.be/h2RQVlNBfqU?si=Gi5KwCD_-qWOX60D)

> ⚡️ A full-stack real-time horse-riding platform, built during my internship, showcasing production-grade engineering, session management, booking workflows, admin panel, and MongoDB-backed storage.

---

## 📌 Overview

**EquiRide** is a **complete booking and registration platform** for horse-riding experiences. Designed with scalability, user authentication, session management, and admin workflows — it’s a cleaned-up open-source version of a production system used by real clients.

🧠 The production build includes:
- Private AI integrations for demand prediction
- Secure payment processing
- OTP-based login (excluded in this repo)

---

## 🧑‍💻 Tech Stack

- **Frontend**: EJS Templates, Bootstrap 5, DataTables  
- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Auth & Sessions**: `express-session`, `connect-flash`  
- **Database**: MongoDB Atlas  
- **Hosting**: Ready for deployment on Render / Railway

---

## 🌟 Key Features

✅ User Sign Up & Login with Flash Messaging  
✅ Admin Dashboard to View All Registrations  
✅ Real-Time Booking System  
✅ Fully Responsive UI with Bootstrap  
✅ MongoDB Integration via Mongoose + Native Driver  
✅ Booking Confirmation & Success Screen  
✅ Error Handling and Flash-Based Alerts  
✅ Private email-based session tracking logic  
✅ Secure .env-based deployment ready

---

## 📽 Demo Preview

▶️ [Click here to watch the complete demo](https://youtu.be/h2RQVlNBfqU?si=Gi5KwCD_-qWOX60D)

---

## 🚀 Run Locally

```bash
git clone https://github.com/durjaysamrat/EquiRide.git
cd EquiRide
npm install

# Add your .env file with the following:
MONGO_URI=your-mongodb-uri

npm start
