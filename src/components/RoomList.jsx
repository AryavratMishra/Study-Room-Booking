import React from 'react';
import RoomCard from './RoomCard';

export default function RoomList({ rooms, date, bookings, onBookSlot }) {
    if (!rooms || rooms.length === 0) {
        return <div className="empty-state">No rooms available for the selected capacity.</div>;
    }

    return (
        <div className="room-list">
            {rooms.map(room => (
                <RoomCard
                    key={room.id}
                    room={room}
                    date={date}
                    roomBookings={bookings.getBookingsForRoomAndDate(room.id, date)}
                    onBookSlot={onBookSlot}
                />
            ))}
        </div>
    );
}
