import { useState, useEffect } from 'react';
import { translations } from '../translations';

export default function Header({ 
  onLanguageChange, 
  theme, 
  toggleTheme 
}: { 
  onLanguageChange: (lang: string) => void,
  theme: string,
  toggleTheme: () => void
}) {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');
  const [isControlsOpen, setIsControlsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }, [lang, theme]);

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
        <button className="theme-switcher" onClick={() => { toggleTheme(); setIsControlsOpen(false); }} title={t.themeSwitcher}>🌓</button>
        <select className="language-select" onChange={changeLanguage} value={lang} title={t.languageSelector}>
          <option value="en">English</option>
          <option value="cz">Čeština</option>
          <option value="ar">العربية</option>
        </select>
      </div>
      <h1>{t.title}</h1>
    </header>
  );
}
