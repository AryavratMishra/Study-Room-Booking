import React from 'react';

export default function BookingModal({ bookingDetails, onConfirm, onCancel }) {
    if (!bookingDetails) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Confirm Booking</h2>
                <div className="modal-details">
                    <p><strong>Room:</strong> {bookingDetails.room.name}</p>
                    <p><strong>Date:</strong> {bookingDetails.date}</p>
                    <p><strong>Time:</strong> {bookingDetails.timeSlot}</p>
                </div>
                <div className="modal-actions">
                    <button className="btn-secondary" onClick={onCancel}>Cancel</button>
                    <button className="btn-primary" onClick={onConfirm}>Confirm Booking</button>
                </div>
            </div>
        </div>
    );
}
