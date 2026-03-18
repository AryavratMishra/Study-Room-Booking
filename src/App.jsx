import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import RoomList from './components/RoomList';
import BookingModal from './components/BookingModal';
import BookingSummary from './components/BookingSummary';
import ErrorBoundary from './components/ErrorBoundary';
import { useBookings } from './hooks/useBookings';
import { MOCK_ROOMS } from './data/mockData';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [minCapacity, setMinCapacity] = useState(0);
  const [bookingIntent, setBookingIntent] = useState(null);

  const { bookings, bookSlot, cancelBooking, getBookingsForRoomAndDate, getAllBookings } = useBookings();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleBookSlotClick = (room, date, timeSlot) => {
    setBookingIntent({ room, date, timeSlot });
  };

  const confirmBooking = () => {
    if (bookingIntent) {
      bookSlot(bookingIntent.room.id, bookingIntent.date, bookingIntent.timeSlot);
      setBookingIntent(null);
    }
  };

  const filteredRooms = useMemo(() => {
    return MOCK_ROOMS.filter(room => room.capacity >= minCapacity);
  }, [minCapacity]);

  return (
    <ErrorBoundary>
      <div className="app-container">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <main className="main-content">
          <div className="controls-section">
            <div className="control-group">
              <label htmlFor="date-picker">Select Date:</label>
              <input
                id="date-picker"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="control-group">
              <label htmlFor="capacity-filter">Minimum Capacity:</label>
              <select
                id="capacity-filter"
                value={minCapacity}
                onChange={(e) => setMinCapacity(Number(e.target.value))}
              >
                <option value={0}>Any Size</option>
                <option value={4}>4+ People</option>
                <option value={6}>6+ People</option>
                <option value={8}>8+ People</option>
              </select>
            </div>
          </div>

          <div className="content-grid">
            <div className="rooms-section">
              <h2>Available Rooms</h2>
              <RoomList
                rooms={filteredRooms}
                date={selectedDate}
                bookings={{ getBookingsForRoomAndDate }}
                onBookSlot={handleBookSlotClick}
              />
            </div>

            <aside className="sidebar">
              <BookingSummary
                bookings={getAllBookings()}
                onCancelBooking={cancelBooking}
              />
            </aside>
          </div>
        </main>

        <BookingModal
          bookingDetails={bookingIntent}
          onConfirm={confirmBooking}
          onCancel={() => setBookingIntent(null)}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
