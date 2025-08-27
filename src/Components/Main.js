import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
export default function Footer() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}