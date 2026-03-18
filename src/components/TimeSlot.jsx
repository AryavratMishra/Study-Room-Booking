import React from 'react';

export default function TimeSlot({ time, isBooked, capacity, onClick }) {
    return (
        <button
            className={`time-slot ${isBooked ? 'booked' : 'available'}`}
            onClick={onClick}
            disabled={isBooked}
            aria-label={`${time} - ${isBooked ? 'Booked' : `Available - ${capacity}`}`}
        >
            <span className="time-text">{time}</span>
            <span className="status-indicator">{isBooked ? 'Booked' : `AVAILABLE - ${capacity}`}</span>
        </button>
    );
}
