# Study Room Booking UI

A beautiful, responsive Study Room Booking Interface built with React and Vite. This application simulates a room booking system entirely on the frontend, featuring state persistence via `localStorage`,  including Dark Mode.

## Features

- **Room Display**: View an assortment of study rooms with varying capacities and optional locations.
- **Dynamic Slot Availability**: Each room displays time slots, tracking real-time available capacity for each slot.
- **Booking Workflows**: Safely book slots up to a room's maximum capacity. A confirmation modal ensures no accidental bookings.
- **Double Booking Prevention**: Once a slot's capacity is fully booked, it securely locks and disables to prevent overbooking.
- **Persistence**: Bookings are meticulously persisted in `localStorage`. Leaving or refreshing the page won't lose your data!
- **Bonus Capabilities**:
  - Filter rooms by desired minimum capacity
  - Select and book for multi-day periods
  - View a dedicated sidebar for managing and canceling active bookings
  - Fully responsive layout
  - Immersive CSS-driven Light / Dark Theme toggles based on custom properties

## Tech Stack

- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Vanilla CSS (CSS Variables, Flexbox/Grid, Animations)

## Getting Started

Follow these instructions to run the project on your local machine.

### Prerequisites
Make sure you have Node.js and npm installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AryavratMishra/Study-Room-Booking.git
   cd Study-Room-Booking
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the app:**
   Open your browser and navigate to the local URL provided in your terminal (usually `http://localhost:5173`).

## Usage

- **Switch Themes**: Use the toggle button in the header.
- **Filter Rooms**: Use the minimum capacity dropdown to filter the room list.
- **Book a Room**: Pick a date, click on any available green slot, and confirm the modal dialogue to finalize. The capacity tracker updates immediately.
- **Cancel Bookings**: Use the right-hand panel to review your schedule and cancel any booking.

Enjoy your completely client-side Study Space Booking App!
