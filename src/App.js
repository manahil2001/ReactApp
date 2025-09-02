import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { submitAPI } from "./api";

import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Menu from "./Components/Menu";
import BookingPage from "./Components/BookingPage";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ConfirmedBooking from "./Components/ConfirmedBooking";

import { initializeTimes, updateTimes } from "./AppFunctions";

import "./App.css";

function App() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  function submitForm(formData) {
  const success = submitAPI(formData);
  if (success) {
    // Get existing bookings or empty array
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Add new booking
    const updatedBookings = [...existingBookings, formData];

    // Save to localStorage
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    // Redirect to confirmation page
    navigate("/confirmed");
  }
}


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              onSubmit={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
