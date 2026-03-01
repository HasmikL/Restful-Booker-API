Welcome to the **Restful‑Booker‑API** project! This repository contains automated API tests built with **Playwright** to validate endpoints of the **Restful‑Booker API**, a public sandbox API for practicing API testing.  

API URL: [https://restful-booker.herokuapp.com/](https://restful-booker.herokuapp.com/)

 

## 🚀 Overview

The **Restful‑Booker API** allows you to perform **Create, Read, Update, and Delete (CRUD)** operations for hotel bookings. This project uses **Playwright** to send HTTP requests, validate responses, and verify API behavior. Tests cover authentication, CRUD operations, filtering, and edge cases.

 
## 🧠 Features Tested

- 🟢 **Health Check** – Verify API availability (`GET /ping`)  
- 🔐 **Authentication** – Generate and validate auth tokens (`POST /auth`)  
- 📋 **Booking CRUD** – Create, Read, Update, Partial Update, and Delete bookings (`/booking`)  
- 🔍 **Filtering and Search** – Query bookings by firstname, lastname, or date ranges

 
## 🛠️ Tech Stack

- 💻 **Node.js & npm** – JavaScript runtime and package manager  
- 🎭 **Playwright** – Test framework for APIs  
- 📜 **TypeScript / JavaScript** – Language for writing tests  
- 🧪 **Assertions** – Built-in Playwright test runner assertions  

 
## 🧩 Getting Started

### 📦 Prerequisites

- Node.js (LTS recommended)  
- npm (comes with Node.js)

### 📥 Installation

```bash

git clone https://github.com/HasmikL/Restful-Booker-API.git
cd Restful-Booker-API
npm install

Official Restful‑Booker API docs:
https://restful-booker.herokuapp.com/apidoc/index.html

Common endpoints:

GET /ping – Health check

POST /auth – Generate authentication token

GET /booking – List all bookings

POST /booking – Create a new booking

PUT /booking/:id – Update a booking

PATCH /booking/:id – Partial update of a booking

DELETE /booking/:id – Remove a booking
