import { useState, useEffect } from 'react';
import { translations } from '../translations';

export default function Header({ onLanguageChange, subtitle }: { onLanguageChange: (lang: string) => void, subtitle: string }) {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    onLanguageChange(newLang);
  };

  const t = translations[lang as keyof typeof translations];

  return (
    <header>
      <img src="/images/mosque-logo.png" alt="Logo" className="logo" />
      <h1>{t.title}</h1>
      <h4>{subtitle}</h4>
      <div className="top-controls">
        <button className="theme-switcher" onClick={toggleTheme}>🌓</button>
        <select className="language-select" onChange={changeLanguage} value={lang}>
          <option value="en">English</option>
          <option value="cz">Čeština</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </header>
  );
}
