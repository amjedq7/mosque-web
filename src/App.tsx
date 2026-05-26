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
    <>
      <Header onLanguageChange={setLang} subtitle={getSubtitle()} />
      <nav>
        <Link to="/">{t.home}</Link>
        <Link to="/gallery">{t.gallery}</Link>
        <Link to="/contact">{t.contact}</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MainWrapper><h2>{t.welcome}</h2><p>{t.description}</p></MainWrapper>} />
        <Route path="/gallery" element={<MainWrapper><GalleryPage t={t} /></MainWrapper>} />
        <Route path="/contact" element={<MainWrapper><ContactPage t={t} /></MainWrapper>} />
      </Routes>
      <footer>{t.footer}</footer>
    </>
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
