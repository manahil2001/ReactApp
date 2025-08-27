
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Menu from './Components/Menu';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
