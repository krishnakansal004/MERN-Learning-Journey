# Perplexity Clone - Project Setup 🚀

This folder contains my **Perplexity Clone** project, built as part of my MERN stack and GenAI learning journey.

The project focuses on building a full-stack AI-powered application using Node.js, Express, MongoDB, authentication, email verification, Socket.IO, LangChain, and AI model integrations.

---

## About This Project

This project is currently in progress.

The main goal of this project is to understand how modern AI-powered applications work behind the scenes, including:

- User authentication
- Email verification
- Backend API structure
- MongoDB data modeling
- Real-time communication
- AI model integration
- LangChain tools and agents
- Clean project architecture

---

## Latest Progress

### Day 10 - Login and Register Pages

- Created Login page
- Created Register page
- Performed two-way binding with form inputs
- Connected authentication APIs with frontend
- Implemented user registration flow
- Implemented user login flow
- Tested complete auth flow from frontend to backend

---

## Progress Log

| Day | Work Done |
|---|---|
| Day 10 | Created Login/Register pages and connected auth flow with backend |
| Day 9 | Explored GenAI and Mistral AI documentation |
| Day 8 | Read LangChain documentation and implemented AI agent/tool setup |
| Day 7 | Implemented email verification and tested LangChain with Gemini API |
| Day 6 | Implemented Nodemailer email sending with Gmail authentication |
| Day 5 | Set up Socket.IO and created initial Perplexity project data models |

---

## Features Implemented

### Authentication

- User registration
- User login
- Password handling
- Email verification flow
- Login restriction for unverified users

### Email Verification

- Sends verification link to user email
- Verifies user after clicking the email link
- Updates verification status in MongoDB
- Prevents login until email is verified

### AI Integration

- Integrated LangChain basics
- Tested Gemini API using `ChatGoogleGenerativeAI`
- Explored Mistral AI documentation
- Created basic AI agent/tool setup
- Practiced tool schema validation using Zod

### Backend Setup

- Express server setup
- MongoDB connection
- Mongoose models
- API routes
- Environment variable configuration
- Error handling practice

### Real-Time Setup

- Basic Socket.IO setup
- Understanding real-time communication flow
- Practiced event-based communication

---

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend

- React.js
- JavaScript

### Authentication & Email

- Nodemailer
- Gmail SMTP / App Password
- Email verification links

### Real-Time Communication

- Socket.IO

### AI / GenAI

- LangChain
- Gemini API
- Mistral AI
- Zod

### Tools

- Git
- GitHub
- Postman
- VS Code

---

## Current Project Structure

```txt
Perplexity/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── middleware/
│   │   └── app.js
│   │
│   ├── package.json
│   └── .env
│
├── Frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md