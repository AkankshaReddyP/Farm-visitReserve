# Green Acres Farm Reservation App

A simple, intuitive web app for booking farm visits, where guests can pick fresh produce and unwind in nature.

---

## Overview

Green Acres Farm Reservation App lets visitors select a date and time slot, choose which vegetables or fruits to pick, and view all upcoming bookings. Built as a full-stack project:

* **Backend**: RESTful API with Node.js, Express, and MongoDB Atlas
* **Frontend**: React app styled with Tailwind CSS

---

## Features

* **Book a Visit**: Choose date, time slot, and produce items.
* **View Reservations**: Responsive card layout of upcoming visits.
* **Real-time Updates**: New bookings appear instantly.
* **Mobile First**: Fully responsive and touch-friendly.

---

## Tech Stack

| Layer      | Technology          |
| ---------- | ------------------- |
| Backend    | Node.js, Express    |
| Database   | MongoDB Atlas       |
| Frontend   | React, Tailwind CSS |
| Networking | Axios               |

---

## Prerequisites

* **Node.js** v14 or higher
* **npm** v6 or higher
* A **MongoDB Atlas** account (free tier)

---

## Installation

1. **Clone** the repo:

   ```bash
   git clone https://github.com/AkankshaReddyP/Farm-visitReserve
   cd Farm-visitReserve
   ```

2. **Backend** setup:

   ```bash
   cd farm-reserver
   npm install
   node src/app.js
   ```

   The API will run at `http://localhost:5000/api`.

3. **Frontend** setup:

   ```bash
   cd ../farm-frontend
   npm install
   npm start
   ```

   Open `http://localhost:3000` in your browser.

---

## Usage

1. Navigate to the homepage.
2. Fill in the **Reserve Your Spot** form:

   * **Date**: Select a calendar date.
   * **Time slot**: Choose a visit window.
   * **Your Name** & **Phone**: Contact details.
   * **What to pick**: Select one or more produce items.
3. Click **Book Visit**.
4. Scroll down to **Upcoming Visits** to see your booking.

---

## API Endpoints

| Method | Endpoint                | Description              |
| ------ | ----------------------- | ------------------------ |
| GET    | `/api/health`           | Check server health      |
| GET    | `/api/reservations`     | List all reservations    |
| POST   | `/api/reservations`     | Create a new reservation |
| GET    | `/api/reservations/:id` | Get a reservation by ID  |
| DELETE | `/api/reservations/:id` | Cancel a reservation     |

---

