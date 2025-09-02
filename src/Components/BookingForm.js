// src/Components/BookingForm.js
import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      date,
      time,
      guests,
      occasion,
    };

    // Send booking data to parent (BookingsPage)
    if (onSubmit) {
      onSubmit(formData);
    }

    // Reset form after submission
    setName("");
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>Reserve a Table</h3>

      {/* Name input */}
      <label htmlFor="name">Name:
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      </label>
      {/* Date input */}
      <label htmlFor="date">Date:
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          dispatch({ type: "update_times", payload: e.target.value });
        }}
        required
      />
      </label>
      {/* Time select */}
      <label htmlFor="time">Time:
      <select
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((t, index) => (
          <option key={index} value={t}>
            {t}
          </option>
        ))}
      </select>
      </label>

      {/* Guests input */}
      <label htmlFor="guests">Number of Guests:
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />
      </label>

      {/* Occasion select */}
      <label htmlFor="occasion">Occasion:
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Other">Other</option>
      </select>
      </label>

      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
