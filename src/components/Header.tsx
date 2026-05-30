import { useState, useEffect } from 'react';
import { translations } from '../translations';

export default function Header({ onLanguageChange }: { onLanguageChange: (lang: string) => void }) {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isControlsOpen, setIsControlsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('lang', lang);
  }, [lang, theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    setIsControlsOpen(false);
  };

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    onLanguageChange(newLang);
    setIsControlsOpen(false);
  };

  const t = translations[lang as keyof typeof translations];

  return (
    <header>
      <a 
        href="https://mawaqit.net/en/mosque-teplice-teplice-41501-czechia" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="prayer-times-link"
      >
        <img 
          src={theme === 'dark' ? '/images/prayer-time-white.svg' : '/images/prayer-time-black.svg'} 
          alt="Prayer Times" 
          style={{ width: '32px', height: '32px', display: 'block' }}
        />
      </a>
      <button className="controls-toggle" onClick={() => setIsControlsOpen(!isControlsOpen)}>
        <img 
          src="/hamburger-icon-50.png" 
          alt="Menu" 
          style={{ 
            width: '24px', 
            height: '24px', 
            filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none' 
          }} 
        />
      </button>
      <div className={`top-controls ${isControlsOpen ? 'open' : ''}`}>
        <button className="theme-switcher" onClick={toggleTheme}>🌓</button>
        <select className="language-select" onChange={changeLanguage} value={lang}>
          <option value="en">English</option>
          <option value="cz">Čeština</option>
          <option value="ar">العربية</option>
        </select>
      </div>
      <h1>{t.title}</h1>
    </header>
  );
}
