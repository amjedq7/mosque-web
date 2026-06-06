import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
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

  const navLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    const baseClass = "font-bold p-[12px_20px] min-w-[100px] text-center border-2 rounded transition-all duration-300";
    
    // Default (Unactive)
    let colorClass = theme === 'light'
      ? "text-black border-black bg-white/20 backdrop-blur-sm shadow-sm hover:bg-black hover:text-white"
      : "text-[var(--white)] border-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--primary-color)]";
    
    // Active class logic
    if (isActive) {
      colorClass = theme === 'light' 
        ? "bg-black text-white border-black" 
        : "bg-[var(--white)] text-[var(--primary-color)] border-[var(--white)]";
    }

    return `${baseClass} ${colorClass}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-[1_0_auto]">
        <Header onLanguageChange={setLang} theme={theme} toggleTheme={toggleTheme} />
        <div className="flex justify-center">
          <nav className="flex flex-wrap justify-center gap-4 m-2.5 p-4 rounded-2xl z-[1000] sticky top-2.5 max-sm:grid max-sm:grid-cols-2">
            <Link to="/" className={navLinkClass('/')}>{t.home}</Link>
            <Link to="/gallery" className={navLinkClass('/gallery')}>{t.gallery}</Link>
            <Link to="/contact" className={navLinkClass('/contact')}>{t.contact}</Link>
            <a 
              href="https://mawaqit.net/en/mosque-teplice-teplice-41501-czechia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center justify-center p-[8px_12px] border-2 rounded transition-all duration-300 text-xs font-bold group ${
                theme === 'light'
                  ? 'border-black text-black bg-white/20 backdrop-blur-sm shadow-sm hover:bg-black hover:text-white'
                  : 'border-[var(--white)] text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--primary-color)]'
              }`}
              title={t.prayerTimes}
            >
              <div className="flex flex-col text-center mr-2 leading-none gap-1">
                {t.prayerTimes.split(' ').map((word: string, i: number) => <span key={i} className="text-xs">{word}</span>)}
              </div>
              <img 
                src={theme === 'light' ? '/images/prayer-time-black.svg' : '/images/prayer-time-white.svg'} 
                alt="Prayer Times" 
                className={`w-[30px] h-[30px] block transition-all duration-300 ${
                  theme === 'light'
                    ? 'group-hover:brightness-0 group-hover:invert' // Hover: White
                    : 'group-hover:filter-[brightness(0)_saturate(100%)_invert(27%)_sepia(2%)_saturate(417%)_hue-rotate(320deg)_brightness(97%)_contrast(85%)]' // Hover: Primary (#4a4a4a)
                }`}
              />
            </a>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<MainWrapper><h2 className="text-3xl font-bold mb-4">{t.welcome}</h2><p className="text-lg">{t.description}</p></MainWrapper>} />
          <Route path="/gallery" element={<MainWrapper><GalleryPage t={t} /></MainWrapper>} />
          <Route path="/contact" element={<MainWrapper><ContactPage t={t} /></MainWrapper>} />
        </Routes>
      </div>
      <Footer t={t} lang={lang} />
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
