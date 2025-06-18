# 🐎 EquiRide - Real-Time Horse Riding Booking Platform

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-brightgreen)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey)](https://expressjs.com/)

![EquiRide Banner](./banner.jpg)

**Live Demo**: [YouTube Walkthrough](https://youtu.be/h2RQVlNBfqU) • 
**GitHub Repo**: [github.com/durjaysamrat/EquiRide](https://github.com/durjaysamrat/EquiRide)

Hey there! EquiRide is a booking platform I built during my internship to solve real problems for horse riding academies. It's a full-stack application that handles session bookings, user management, and admin workflows - the same system that's been running in production at actual riding schools.

## What's Inside

### The Tech Stack I Used
- **Frontend**: EJS templates with Bootstrap 5 for clean UI
- **Backend**: Node.js + Express.js for the API logic
- **Database**: MongoDB with Mongoose ORM
- **Auth**: Session-based authentication
- **Deployment**: Ready for Render/Railway with .env config

### Key Features That Work
- User registration and login with session management
- Real-time riding session booking
- Admin dashboard to view/manage bookings
- Error handling with flash messages
- Fully responsive design that works on mobile
- Production-ready configuration

### How It Started
This project came from a real need at riding academies that were using paper-based booking systems. During my internship, I worked closely with instructors to understand their workflow pain points. The open-source version contains the core functionality, while the production version at academies has additional features like payment processing and AI-based demand forecasting.

## Getting Started Locally

Here's how to run it on your machine:

```bash
git clone https://github.com/durjaysamrat/EquiRide.git
cd EquiRide
npm install

# Create .env file with your MongoDB URI
cp .env.example .env

npm run dev
```

Then visit `http://localhost:3000` in your browser. Use:
- Admin: admin@equiride.com / admin123
- Or register a new user account

## Challenges & Solutions

Building EquiRide taught me valuable lessons:

1. **Session Management**: 
   - Problem: Needed persistent logins without JWTs
   - Solution: Implemented express-session with MongoDB store

2. **Real-time Updates**:
   - Problem: Booking conflicts when multiple users book simultaneously
   - Solution: Added transaction-like checks in booking logic

3. **Admin Dashboard**:
   - Problem: Needed efficient way to view all bookings
   - Solution: Integrated DataTables with server-side processing

## What's Missing Here

The production version at riding academies includes additional features I can't share publicly:
- OTP-based authentication with Twilio
- AI-powered demand forecasting
- Razorpay payment integration
- Automated email notifications

## Screenshots

| | | |
|-|-|-|
| **Home Page** | **Booking Interface** | **Admin View** |
| ![Home](![image](https://github.com/user-attachments/assets/784f7469-ad09-4b55-afbe-b145c3b8f2d2)) | ![Booking](![image](https://github.com/user-attachments/assets/90b35c17-567f-4151-88f2-a8fed77e9034)) | ![Admin](![image](https://github.com/user-attachments/assets/1fde4783-0b51-42e8-b570-eda0462b6719)) |

## Why This Matters for My Journey

This project represents my transition from academic projects to production-ready systems:
- First time working with real client requirements
- Learned to balance feature development with performance
- Implemented security best practices
- Gained experience with deployment pipelines

## Contribute or Fork

Feel free to:
- Report issues if you find any
- Suggest improvements through PRs
- Use as a learning resource for full-stack development

## Let's Connect

I'm actively looking for full-stack development opportunities. If you like what you see:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Durjay_Samrat-0077B5?style=flat&logo=linkedin)](https://linkedin.com/in/durjaysamrat)
[![GitHub](https://img.shields.io/badge/GitHub-durjaysamrat-181717?style=flat&logo=github)](https://github.com/durjaysamrat)
[![Portfolio](https://img.shields.io/badge/Portfolio-View_Projects-FF6B6B?style=flat)](https://durjaysamrat.vercel.app)
[![Email](https://img.shields.io/badge/Email-durjaysamratn36@gmail.com-D14836?style=flat&logo=gmail)](mailto:durjaysamratn36@gmail.com)

> "Building EquiRide taught me how technology can transform traditional businesses - one ride at a time."  
> - Durjay Samrat

```
