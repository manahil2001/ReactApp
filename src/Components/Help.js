import React, { useState } from "react";

function HelpWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your query has been submitted: ${message}`);
    setMessage("");
    setOpen(false);
  };

  return (
    <div>
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          background: "#007bff",
          color: "white",
          fontSize: "18px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setOpen(!open)}
      >
        ?
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            padding: "15px",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "10px",
            width: "250px",
          }}
        >
          <h4>Need Help?</h4>
          <p>Contact us at gginger132@gmail.com</p>
          <form onSubmit={handleSubmit}>
          <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your query..."
              required
              style={{ width: "100%", height: "80px", marginBottom: "10px" }}
            />
          <button
              type="submit"
              style={{
                width: "100%",
                padding: "8px",
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}

    </div>
  );
}

export default HelpWidget;
