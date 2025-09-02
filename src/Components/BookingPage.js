import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch, onSubmit }) {
  return (
    <div>
      <h1>Book a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmit={onSubmit} // ✅ forwards the same name
      />
    </div>
  );
}
