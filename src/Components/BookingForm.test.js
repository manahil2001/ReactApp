import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders BookingForm labels and button", () => {
  const mockAvailableTimes = ["17:00", "18:00"]; // mock times

  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  expect(screen.getByLabelText(/Date:/i)).toBeInTheDocument();
   expect(screen.getByRole("button", { name: /Book Now/i })).toBeInTheDocument();
});
