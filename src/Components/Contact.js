//Contact

export default function Contact() {
  return (
    <section id="contact">
      <img src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba" alt="Map" class="contact-image"></img>
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether you have a question about our menu, 
        reservations, or anything else, our team is ready to help.
      </p>

      <h2>Our Location</h2>
      <p>
        Little Lemon Restaurant <br />
        123 Main Street <br />
        Chicago, IL 60601
      </p>

      <h2>Opening Hours</h2>
      <ul>
        <li>Monday - Friday: 11:00 AM – 10:00 PM</li>
        <li>Saturday: 12:00 PM – 11:00 PM</li>
        <li>Sunday: Closed</li>
      </ul>

      <h2>Get in Touch</h2>
      <p>📞 (312) 555-1234</p>
      <p>📧 contact@littlelemon.com</p>

      <h2>Send us a Message</h2>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" placeholder="Your Name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" placeholder="Your Email" required />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" placeholder="Your Message" required></textarea>
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}