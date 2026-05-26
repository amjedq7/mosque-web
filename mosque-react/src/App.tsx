import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

const MainWrapper = ({ children }: { children: React.ReactNode }) => <main className="page-content">{children}</main>;

function App() {
  return (
    <Router>
      <Header title="ISLAMIC FOUNDATION TEPLICE" subtitle="Mosque Portal" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainWrapper><h2>Welcome to Our Mosque</h2><p>Your place of peace, prayer, and community.</p></MainWrapper>} />
        <Route path="/gallery" element={<MainWrapper><GalleryPage /></MainWrapper>} />
        <Route path="/contact" element={<MainWrapper><ContactPage /></MainWrapper>} />
      </Routes>
      <footer>&copy; 2026 Community Mosque</footer>
    </Router>
  );
}

export default App;
