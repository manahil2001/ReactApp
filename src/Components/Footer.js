//Footer
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      <ul className="footer-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </footer>
  );
}