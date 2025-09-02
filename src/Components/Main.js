import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";
import BookingPage from "./BookingPage";
import { initializeTimes, updateTimes } from "./App"; // import logic

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route
        path="/booking"
        element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
      />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
