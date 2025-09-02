// src/api.js

// Simulated API for fetching available times
export function fetchAPI(date) {
  const base = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const d = new Date(date);
  const day = d.getDate();

  const keepEven = day % 2 === 1;
  return base.filter((_, i) => (keepEven ? i % 2 === 0 : i % 2 === 1));
}

// Simulated API for submitting booking form
export function submitAPI(formData) {
  console.log("Submitting booking:", formData);

  // Normally you'd send `formData` to a backend server here.
  // We'll just simulate success/failure randomly:
  const success = Math.random() > 0.2; // 80% chance of success

  return success;
}
