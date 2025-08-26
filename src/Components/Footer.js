//Footer

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      <ul className="footer-links">
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  );
}