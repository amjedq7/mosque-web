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
  const t = translations[lang as keyof typeof translations];
  const location = useLocation();

  const getSubtitle = () => {
    switch (location.pathname) {
      case '/': return t.home;
      case '/gallery': return t.gallery;
      case '/contact': return t.contact;
      default: return t.home;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: '1 0 auto' }}>
        <Header onLanguageChange={setLang} subtitle={getSubtitle()} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <nav>
            <Link to="/">{t.home}</Link>
            <Link to="/gallery">{t.gallery}</Link>
            <Link to="/contact">{t.contact}</Link>
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
