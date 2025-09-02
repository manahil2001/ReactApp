// src/__tests__/AppFunctions.test.js
import { initializeTimes, updateTimes } from "./AppFunctions";

// Mock localStorage
beforeEach(() => {
  Storage.prototype.getItem = jest.fn();
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.clear = jest.fn();
});

describe("initializeTimes", () => {
  test("returns all times if no bookings in localStorage", () => {
    localStorage.getItem.mockReturnValueOnce(null); // no bookings

    const result = initializeTimes();
    expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });

  test("filters out already booked times for today", () => {
    const today = new Date().toISOString().split("T")[0];
    const bookings = JSON.stringify([{ date: today, time: "18:00" }]);

    localStorage.getItem.mockReturnValueOnce(bookings);

    const result = initializeTimes();
    expect(result).not.toContain("18:00");
  });
});

describe("updateTimes", () => {
  test("returns all times if no bookings for selected date", () => {
    localStorage.getItem.mockReturnValueOnce(JSON.stringify([]));

    const result = updateTimes([], { type: "update_times", payload: "2025-09-01" });
    expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });

  test("filters out already booked times for selected date", () => {
    const bookings = JSON.stringify([{ date: "2025-09-01", time: "19:00" }]);
    localStorage.getItem.mockReturnValueOnce(bookings);

    const result = updateTimes([], { type: "update_times", payload: "2025-09-01" });
    expect(result).not.toContain("19:00");
  });
});

describe("writing to localStorage", () => {
  test("saves a booking correctly", () => {
    const booking = { date: "2025-09-01", time: "20:00" };

    // Simulate existing bookings
    localStorage.getItem.mockReturnValueOnce(JSON.stringify([]));

    // Write new booking
    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    const updated = [...existing, booking];
    localStorage.setItem("bookings", JSON.stringify(updated));

    expect(localStorage.setItem).toHaveBeenCalledWith("bookings", JSON.stringify([booking]));
  });
});
