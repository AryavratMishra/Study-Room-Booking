import React from 'react';
import TimeSlotGrid from './TimeSlotGrid';

export default function RoomCard({ room, date, roomBookings, onBookSlot }) {
    return (
        <div className="room-card">
            <div className="room-header">
                <div className="room-info">
                    <h3>{room.name}</h3>
                    <span className="capacity-badge">Capacity: {room.capacity}</span>
                </div>
                {room.location && <div className="room-location">📍 {room.location}</div>}
            </div>
            <div className="room-body">
                <TimeSlotGrid
                    room={room}
                    date={date}
                    bookedSlots={roomBookings.map(b => b.timeSlot)}
                    onBookSlot={onBookSlot}
                />
            </div>
        </div>
    );
}
