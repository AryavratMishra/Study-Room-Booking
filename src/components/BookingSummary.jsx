import React from 'react';

export default function BookingSummary({ bookings, onCancelBooking }) {
    if (!bookings || bookings.length === 0) {
        return null;
    }

    return (
        <div className="booking-summary-panel">
            <h2>Your Bookings</h2>
            <ul className="booking-list">
                {bookings.map(booking => (
                    <li key={booking.id} className="booking-item">
                        <div className="booking-info">
                            <span className="booking-room">Room ID: {booking.roomId}</span>
                            <span className="booking-date">{booking.date}</span>
                            <span className="booking-time">{booking.timeSlot}</span>
                        </div>
                        <button
                            className="btn-cancel"
                            onClick={() => onCancelBooking(booking.id)}
                        >
                            Cancel
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
