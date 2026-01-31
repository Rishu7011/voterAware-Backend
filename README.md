<div align="center">

  <h1>⚙️ voterAware — Backend API Server</h1>

  ### Scalable REST API & Microservice Engine for Election Awareness

  <p align="center">
    High-performance backend architecture built with Express 5, MongoDB, Better Auth, Cloudinary, and Nodemailer. Powering voter verification, candidate profiles, polling booth geolocation search, and election statistics.
  </p>

  <p align="center">
    <a href="#-key-features"><strong>Key Features »</strong></a>
    &nbsp;•&nbsp;
    <a href="#%EF%B8%8F-tech-stack"><strong>Tech Stack</strong></a>
    &nbsp;•&nbsp;
    <a href="#-api-architecture"><strong>Architecture</strong></a>
    &nbsp;•&nbsp;
    <a href="#-quick-start"><strong>Quick Start</strong></a>
  </p>

  <br />

  <!-- Badges -->
  <img src="https://img.shields.io/badge/Node.js-v20-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-5.2-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express 5" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose_v9-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Better_Auth-MongoDB_Adapter-FD366E?style=for-the-badge" alt="Better Auth" />
  <img src="https://img.shields.io/badge/Cloudinary-Media_Upload-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary" />

</div>

---

## 🌟 Key Features

<div align="center">
<table>
  <tr>
    <td width="50%">
      <h3 align="center">🔐 Secure Auth & Sessions</h3>
      <p>Better Auth integration with MongoDB database adapter, encrypted JWT token rotation, and password hashing.</p>
    </td>
    <td width="50%">
      <h3 align="center">📍 Geospatial Booth Search</h3>
      <p>MongoDB <code>2dsphere</code> index queries fetching nearest polling booths based on GPS coordinates and pincode.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3 align="center">🖼️ Cloudinary Media Pipeline</h3>
      <p>Multer memory storage buffer streamed directly to Cloudinary for high-resolution candidate photo uploads.</p>
    </td>
    <td width="50%">
      <h3 align="center">📧 Nodemailer Alert Dispatch</h3>
      <p>Automated SMTP email notifications for voter registration status updates, election reminders, and news digests.</p>
    </td>
  </tr>
</table>
</div>

---

## 🛠️ Tech Stack

| Component | Technology | Description |
|---|---|---|
| **Runtime & Server** | [Node.js](https://nodejs.org/) + [Express 5](https://expressjs.com/) | Asynchronous ES Module API server |
| **Database** | [MongoDB](https://www.mongodb.com/) + Mongoose v9 | Document database with 2dsphere spatial indexes |
| **Authentication** | [Better Auth](https://better-auth.com/) + JWT | Multi-factor auth & session token management |
| **Media Hosting** | [Cloudinary SDK](https://cloudinary.com/) | Image optimization & secure media cloud storage |
| **File Uploads** | [Multer](https://github.com/expressjs/multer) | Multipart/form-data upload handler |
| **Mail Transport** | [Nodemailer](https://nodemailer.com/) | Transactional email notifications via SMTP |

---

## 📂 API Architecture

```bash
backend/
├── server.js               # Express application entry point & CORS configuration
├── models/                 # Mongoose schemas (User, Candidate, Booth, Complaint)
├── controllers/            # Route controllers for Auth, Voter, Booth, and Stats
├── routes/                 # Express router modules (/api/v1/auth, /api/v1/booth)
├── middleware/             # JWT auth validation, Multer upload & error handlers
└── services/               # Cloudinary & Nodemailer transport factories
```

---

## 🚀 Quick Start Guide

### 1. Installation
```bash
git clone https://github.com/Rishu7011/voterAware-Backend.git
cd voterAware-Backend
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### 3. Run Development Server
```bash
npm run dev
```

Server will start listening at [http://localhost:5000](http://localhost:5000).

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for details.

<div align="center">
  <sub>Powering secure, reliable, and transparent election data services.</sub>
</div>
