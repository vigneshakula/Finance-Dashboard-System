# 💰 Finance Dashboard System (Backend)

A secure and scalable backend API for a **Finance Dashboard System** built using **Node.js, Express, TypeScript, and MongoDB**.  
This project demonstrates authentication, role-based access control, and financial data aggregation.


---
## 🌐 Live Demo

Backend API is live at: https://api-finance-dashboard-system.onrender.com/

Swagger Documentation:https://api-finance-dashboard-system.onrender.com/api-docs/

## 🔑 Test Credentials

Admin:
email: admin@gmail.com  
password: htg@12345


## 🚀 Features

- 🔐 JWT Authentication (Signup / Signin)
- 👥 Role-Based Access Control (Admin, Analyst, Viewer)
- 📊 Dashboard Summary (income, expense, balance, analytics)
- 🧾 Record Management (CRUD operations)
- 📁 Category-wise Aggregation
- 📅 Monthly Financial Insights
- 📘 Swagger API Documentation
- ⚡ Validation and Reliability

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Language:** TypeScript
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT
- **Documentation:** Swagger (OpenAPI)
- **Deployment:** Render

---

## 📂 Project Structure
src/

  ├── config/

  ├── controllers/

  ├── middlewares/

  ├── models/

  ├── routes/

  ├── services/

  ├── types/

  ├── validations/

  ├── app.ts

  └── server.ts

---

## ⚙️ Installation & Setup

### 1. Clone the repository
  git clone https://github.com/vigneshakula/Finance-Dashboard-System.git
  
  cd finance-dashboard-system
  
---

### 2. Install dependencies
  npm install
  
---

### 3. Setup environment variables

  Create a `.env` file:
  
  PORT=5000
  
  MONGO_URI=your_mongodb_connection_string
  
  JWT_SECRET=your_secret_key

  
---

### 4. Run in development
  npm run dev
  
---

### 5. Build project
  npm run build
  
---

### 6. Run production
  npm start
  
---

## 📘 API Documentation

Swagger UI available at: /api-docs
  
Example:http://localhost:5000/api-docs


---

## 🔐 Authentication

Use JWT token in headers:Authorization: Bearer <your_token>

---

## 📌 API Endpoints

### 🔑 Auth

- `POST /api/v1/auth/signup` → Register user  
- `POST /api/v1/auth/signin` → Login user  

---

### 🧾 Records

- `GET /api/v1/record` → Get all records  
- `POST /api/v1/record` → Create record  
- `PUT /api/v1/record/:id` → Update record  
- `DELETE /api/v1/record/:id` → Delete record  

---

### 👥 Users (Admin only)

- `GET /api/v1/user` → Get users  
- `POST /api/v1/user` → Create user  
- `PUT /api/v1/user/:id` → Update user  
- `DELETE /api/v1/user/:id` → Delete user  

---

### 📊 Dashboard

- `GET /api/v1/dashboard/summary` → Financial summary  

---

## 📊 Dashboard Calculations

- Total Income
- Total Expense
- Net Balance
- Category-wise totals
- Monthly breakdown
- Recent transactions

---

## 👤 Author

**Vignesh Akula**
