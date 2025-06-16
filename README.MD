# Real-Time Social Network API (Node.js + TypeScript)

Welcome to the backend of a real-time full-stack social network application. This application is designed using Node.js, TypeScript, Express, and MongoDB, with support for Redis caching, email notifications, image uploads, and more.

This repository contains the **backend API** codebase for the social media platform.

---

## 🚀 Features

### 🔐 Authentication & Authorization

- **User Signup & Login** using JWT (stored in HTTP-only cookies)
- **Sign out / Logout**
- **Password Reset** via email
- **Change Password** when logged in
- **Current User Check** (validate token and user session)

### 💬 Chat & Messaging

- One-on-one private messaging system
- Image support in chats
- Message reactions (like emoji responses)
- Mark messages as read
- Delete messages (for self or both users)

### 👤 User Management

- Retrieve a **single user** or **multiple users**
- **Pagination** support
- **Random user suggestions**
- **User profile** creation and editing
- **Follow / Unfollow**, **Block / Unblock** features

### 📝 Posts

- Create posts (with/without images or GIFs)
- Edit, update, and delete posts
- Retrieve single and multiple posts
- Upload profile and background images (via Cloudinary)

### 💬 Comments

- Add, retrieve, and delete comments on posts
- Pagination and multiple comments support

### ❤️ Reactions

- Add reactions to posts (like Facebook's reactions)
- Retrieve all or single post reactions
- Remove reactions

### 📷 Image Uploads

- Upload images for posts and chats
- Upload profile and background images
- Retrieve and delete images
- Powered by **Cloudinary**

### 🔔 Notifications

- In-app notifications and email alerts
- Notification settings (per user)
- Notification preferences (likes, messages, etc.)
- Update and delete notifications

---

## 🛠️ Backend Stack

| Tool/Service   | Purpose                                        |
| -------------- | ---------------------------------------------- |
| **Node.js**    | Runtime for backend logic                      |
| **TypeScript** | Type-safe development                          |
| **Express.js** | API framework                                  |
| **MongoDB**    | Primary database                               |
| **Redis**      | In-memory cache (for frequently accessed data) |
| **JWT**        | User authentication                            |
| **SendGrid**   | Production email service                       |
| **Ludmila**    | Dev email testing (local)                      |
| **Cloudinary** | Image hosting & management                     |
| **Bull**       | Message queue (for background jobs)            |
| **PM2**        | Process manager for production                 |

---

## 📦 Project Structure

```bash
├── .gitignore
├── package.json
├── README.MD
├── tsconfig.json
└── src/
    ├── app.ts               # Entry point (sets up the app)
    ├── config.ts            # App-level config variables
    ├── global.ts            # Global constants and helpers
    ├── routes.ts            # Main API router
    ├── intitialize/
    │   ├── initDatabase.ts  # MongoDB setup
    │   └── initServer.ts    # Server setup (middleware, handlers)
    └── modules/             # All features (auth, posts, etc.)
    └── shared/              # Reusable and cross-feature code
         ├── pkg/            # Global helpers, utils
         ├── services/
         │   ├── db/         # MongoDB connection, queries
         │   ├── emails/     # Email service logic
         │   ├── queues/     # Bull queue config and jobs
         │   └── redis/      # Redis-related logic
         ├── sockets/        # Socket.IO server & events
         └── workers/        # Background job processors
```

---

## 🌐 API & Design

- Built as a **monolithic architecture**, but designed with **modularity**, allowing future **microservice extraction**.
- Controllers are organized by feature and support full CRUD operations.
- Middleware for error handling, authentication, and request validation.

---

## 🧪 Testing

Testing tools will be added (e.g., Jest ) to validate API endpoints.

---

## 📡 Deployment

Deployment is planned for **AWS**, with the infrastructure managed via:

- **Terraform** for provisioning:
  - VPCs, Subnets, Internet/NAT Gateways
  - Load balancers, Security Groups, etc.
- **CircleCI** for CI/CD pipeline setup
- **PM2** for production process management

---

## ✅ Status

Backend implementation is **in progress**, beginning with authentication, followed by posts, chats, and other modules.

---
