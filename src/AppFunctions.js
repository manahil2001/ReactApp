// src/AppFunctions.js


export function initializeTimes() {
  const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  // Get today's date (YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];

  // Filter out times already booked for today
  const bookedTimes = bookings
    .filter(b => b.date === today)
    .map(b => b.time);

  return times.filter(t => !bookedTimes.includes(t));
}


export function updateTimes(state, action) {
  if (action.type === "update_times") {
    const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Filter bookings for selected date
    const bookedTimes = bookings
      .filter(b => b.date === action.payload)
      .map(b => b.time);

    return times.filter(t => !bookedTimes.includes(t));
  }
  return state;
}
