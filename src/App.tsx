import { useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { TranslationProvider, useTranslation } from './contexts/TranslationContext';

const MainWrapper = ({ children }: { children: React.ReactNode }) => <main className="page-content relative z-10">{children}</main>;

function AppContent() {
  const { theme } = useTheme();
  const { lang, t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // 1. Update document title
    if (lang === 'cs') {
      document.title = "Muslimská obec v Teplicích";
    } else if (lang === 'en') {
      document.title = "Islamic Foundation Teplice";
    } else if (lang === 'ar') {
      document.title = "المؤسسة الإسلامية في تبليتسه";
    }

    // 2. Update document direction
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // 3. Update document language
    document.documentElement.lang = lang;
  }, [lang]);

  const navLinks = useMemo(() => [
    { path: '/', label: t.home },
    { path: '/gallery', label: t.gallery },
    { path: '/contact', label: t.contact }
  ], [t]);

  const navLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    const baseClass = "font-bold p-[8px_20px] min-w-[120px] text-center border-2 rounded transition-all duration-300 flex items-center justify-center";
    
    let colorClass = theme === 'light'
      ? "text-black border-black bg-white/20 backdrop-blur-sm shadow-sm hover:bg-black hover:text-white"
      : "text-[var(--white)] border-[var(--white)] hover:bg-[var(--white)] hover:text-black";
    
    if (isActive) {
      colorClass = theme === 'light' 
        ? "bg-black text-white border-black" 
        : "bg-[var(--white)] text-black border-[var(--white)]";
    }

    return `${baseClass} ${colorClass}`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col w-full main-bg relative">
        <Header />
        
        <div className="flex justify-center">
          <nav aria-label="Main Navigation" className="flex flex-wrap justify-center gap-4 m-2.5 p-4 rounded-2xl z-[1000] sticky top-2.5 max-sm:grid max-sm:grid-cols-2">
            {navLinks.map(link => (
              <Link key={link.path} to={link.path} className={navLinkClass(link.path)}>
                {link.label}
              </Link>
            ))}
            <a 
              href="https://mawaqit.net/en/mosque-teplice-teplice-41501-czechia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`font-bold p-[8px_20px] min-w-[120px] text-center border-2 rounded transition-all duration-300 text-sm flex items-center justify-center group ${
                theme === 'light'
                  ? 'border-black text-black bg-white/20 backdrop-blur-sm shadow-sm hover:bg-black hover:text-white'
                  : 'border-[var(--white)] text-[var(--white)] hover:bg-[var(--white)] hover:text-black'
              }`}
              title={t.prayerTimes}
              aria-label={t.prayerTimes}
            >
              <div className="flex flex-col text-center mr-3 leading-none gap-0">
                {t.prayerTimes.split(' ').map((word: string, i: number) => <span key={`pt-${i}`} className="text-sm">{word}</span>)}
              </div>
              <img 
                src={theme === 'light' ? '/images/prayer-time-black.svg' : '/images/prayer-time-white.svg'} 
                alt="Prayer Times" 
                className={`w-[30px] h-[30px] block transition-all duration-300 ${
                  theme === 'light'
                    ? 'group-hover:brightness-0 group-hover:invert'
                    : 'group-hover:filter-[brightness(0)_saturate(100%)_invert(27%)_sepia(2%)_saturate(417%)_hue-rotate(320deg)_brightness(97%)_contrast(85%)]'
                }`}
              />
            </a>
          </nav>
        </div>

        <div className="flex-1 pb-32">
          <Routes>
            <Route path="/" element={<MainWrapper><h2 className="text-3xl font-bold mb-4">{t.welcome}</h2><p className="text-lg">{t.description}</p></MainWrapper>} />
            <Route path="/gallery" element={<MainWrapper><GalleryPage /></MainWrapper>} />
            <Route path="/contact" element={<MainWrapper><ContactPage /></MainWrapper>} />
            <Route path="/privacy-policy" element={<MainWrapper><PrivacyPolicyPage /></MainWrapper>} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider>
        <TranslationProvider>
          <AppContent />
        </TranslationProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
