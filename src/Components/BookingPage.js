import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch, onSubmit }) {
  return (
    <div>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        onSubmit={onSubmit} // ✅ forwards the same name
      />
    </div>
  );
}
