// src/Components/BookingForm.js
import React, { useState, useEffect } from "react";

function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!name || name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
    }

    const today = new Date().toISOString().split("T")[0];
    if (!date || date < today) {
      newErrors.date = "Please select today or a future date.";
    }

    if (!time) {
      newErrors.time = "Please select a time.";
    }

    if (guests < 1 || guests > 10) {
      newErrors.guests = "Guests must be between 1 and 10.";
    }

    if (!occasion) {
      newErrors.occasion = "Please select an occasion.";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  // Re-run validation whenever form fields change
  useEffect(() => {
    validateForm();
  }, [name, date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

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
      <h1>Reserve a Table</h1>

      {/* Name input */}
      <label htmlFor="name">Name:
      <input
        type="text"
        id="name"
        value={name}
        minLength={2}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {errors.name && <span className="error">{errors.name}</span>}
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
      {errors.date && <span className="error">{errors.date}</span>}
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
      {errors.time && <span className="error">{errors.time}</span>}
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
      {errors.guests && <span className="error">{errors.guests}</span>}
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
      {errors.occasion && <span className="error">{errors.occasion}</span>}
      </label>

      <button type="submit" disabled={!isFormValid}>Book Now</button>
    </form>
  );
}

export default BookingForm;
