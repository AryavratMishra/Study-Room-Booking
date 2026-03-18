import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'study_room_bookings';

export function useBookings() {
  const [bookings, setBookings] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      console.error('Failed to load bookings from localStorage', e);
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    } catch (e) {
      console.error('Failed to save bookings to localStorage', e);
    }
  }, [bookings]);

  const bookSlot = useCallback((roomId, dateStr, timeSlot, user_details = "Anonymous") => {
    setBookings((prev) => {
      const dayBookings = prev[dateStr] || {};
      const roomBookings = dayBookings[roomId] || [];

      if (roomBookings.some((b) => b.timeSlot === timeSlot)) {
        // Already booked
        return prev;
      }

      const newBooking = {
        id: crypto.randomUUID(),
        roomId,
        date: dateStr,
        timeSlot,
        user: user_details,
        timestamp: Date.now()
      };

      return {
        ...prev,
        [dateStr]: {
          ...dayBookings,
          [roomId]: [...roomBookings, newBooking]
        }
      };
    });
  }, []);

  const cancelBooking = useCallback((bookingId) => {
    setBookings((prev) => {
      let changed = false;
      const newBookings = {};

      for (const dateStr in prev) {
        newBookings[dateStr] = { ...prev[dateStr] };
        for (const roomId in prev[dateStr]) {
          const roomBookings = prev[dateStr][roomId];
          const filtered = roomBookings.filter(b => b.id !== bookingId);
          if (filtered.length !== roomBookings.length) {
            newBookings[dateStr][roomId] = filtered;
            changed = true;
          }
        }
      }
      return changed ? newBookings : prev;
    });
  }, []);

  const getBookingsForRoomAndDate = useCallback((roomId, dateStr) => {
    return bookings[dateStr]?.[roomId] || [];
  }, [bookings]);

  const getAllBookings = useCallback(() => {
    const all = [];
    for (const dateStr in bookings) {
      for (const roomId in bookings[dateStr]) {
        all.push(...bookings[dateStr][roomId]);
      }
    }
    return all.sort((a, b) => b.timestamp - a.timestamp);
  }, [bookings]);

  return {
    bookings,
    bookSlot,
    cancelBooking,
    getBookingsForRoomAndDate,
    getAllBookings
  };
}
