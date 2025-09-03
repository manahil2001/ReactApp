// src/Components/BookingForm.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockDispatch = jest.fn();
const mockSubmit = jest.fn();

const renderForm = () =>
  render(
    <BookingForm
      availableTimes={["17:00", "18:00"]}
      dispatch={mockDispatch}
      onSubmit={mockSubmit} // make sure BookingForm uses `onSubmit` not `submitForm`
    />
  );

describe("BookingForm", () => {
  test("renders BookingForm labels and button", () => {
    renderForm();
    expect(screen.getByLabelText(/Date:/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Book Now/i })
    ).toBeInTheDocument();
  });

  // 🔹 Attribute validation tests
  test("Name input has correct validation attributes", () => {
    renderForm();
    const nameInput = screen.getByLabelText(/Name:/i);
    expect(nameInput).toHaveAttribute("required");
    expect(nameInput).toHaveAttribute("minLength", "2");
  });

  test("Guests input has min/max validation", () => {
    renderForm();
    const guestsInput = screen.getByLabelText(/Number of Guests:/i);
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  // 🔹 Valid / Invalid state
  test("Submit button is disabled initially (invalid form)", () => {
    renderForm();
    const button = screen.getByRole("button", { name: /Book Now/i });
    expect(button).toBeDisabled();
  });

  test("Submit button becomes enabled when form is valid", () => {
    renderForm();

    fireEvent.change(screen.getByLabelText(/Name:/i), {
      target: { value: "John Doe" },
    });

    const today = new Date().toISOString().split("T")[0];
    fireEvent.change(screen.getByLabelText(/Date:/i), {
      target: { value: today },
    });

    fireEvent.change(screen.getByLabelText(/Time:/i), {
      target: { value: "17:00" },
    });

    fireEvent.change(screen.getByLabelText(/Number of Guests:/i), {
      target: { value: "4" },
    });

    fireEvent.change(screen.getByLabelText(/Occasion:/i), {
      target: { value: "Birthday" },
    });

    const button = screen.getByRole("button", { name: /Book Now/i });
    expect(button).toBeEnabled();
  });

  //Error messages (React validation)
  test("Shows error when name is too short", () => {
    renderForm();
    fireEvent.change(screen.getByLabelText(/Name:/i), {
      target: { value: "J" },
    });
    expect(
      screen.getByText(/Name must be at least 2 characters/i)
    ).toBeInTheDocument();
  });

  test("Shows error when date is in the past", () => {
    renderForm();
    fireEvent.change(screen.getByLabelText(/Date:/i), {
      target: { value: "2000-01-01" },
    });
    expect(
      screen.getByText(/Please select today or a future date/i)
    ).toBeInTheDocument();
  });
});
