import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import { translations } from './translations';

const MainWrapper = ({ children }: { children: React.ReactNode }) => <main className="page-content">{children}</main>;

function AppContent() {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const t = translations[lang as keyof typeof translations];
  const location = useLocation();

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: '1 0 auto' }}>
        <Header onLanguageChange={setLang} theme={theme} toggleTheme={toggleTheme} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <nav>
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>{t.home}</Link>
            <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>{t.gallery}</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>{t.contact}</Link>
            <a 
              href="https://mawaqit.net/en/mosque-teplice-teplice-41501-czechia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="prayer-times-nav-link"
              title={t.prayerTimes}
            >
              <img 
                src={theme === 'light' ? '/images/prayer-time-black.svg' : '/images/prayer-time-white.svg'} 
                alt="Prayer Times" 
                style={{ width: '30px', height: '30px', display: 'block' }}
              />
            </a>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<MainWrapper><h2>{t.welcome}</h2><p>{t.description}</p></MainWrapper>} />
          <Route path="/gallery" element={<MainWrapper><GalleryPage t={t} /></MainWrapper>} />
          <Route path="/contact" element={<MainWrapper><ContactPage t={t} /></MainWrapper>} />
        </Routes>
      </div>
      <footer>{t.footer}</footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
