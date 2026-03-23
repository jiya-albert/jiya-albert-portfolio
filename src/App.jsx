import { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home     from './pages/Home';
import Bio      from './pages/Bio';
import Research from './pages/Research';
import Contact  from './pages/Contact';
import './index.css';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <Router>
      <Navbar theme={theme} onToggle={toggle} />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/bio"      element={<Bio />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
    </Router>
  );
}
