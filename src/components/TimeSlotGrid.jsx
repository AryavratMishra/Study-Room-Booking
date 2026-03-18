import React from 'react';
import TimeSlot from './TimeSlot';
import { TIME_SLOTS } from '../data/mockData';

export default function TimeSlotGrid({ room, date, bookedSlots, onBookSlot }) {
    return (
        <div className="time-slot-grid">
            {TIME_SLOTS.map(slot => {
                const isBooked = bookedSlots.includes(slot);
                return (
                    <TimeSlot
                        key={slot}
                        time={slot}
                        isBooked={isBooked}
                        capacity={room.capacity}
                        onClick={() => !isBooked && onBookSlot(room, date, slot)}
                    />
                );
            })}
        </div>
    );
}
