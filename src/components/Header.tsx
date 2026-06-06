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
    <header className="bg-[var(--header-bg)] text-white p-2 flex flex-col justify-center items-center relative min-h-[120px] text-center">
      <button 
        className="hidden max-sm:block absolute top-2.5 right-2.5 bg-transparent border-none text-2xl cursor-pointer" 
        onClick={() => setIsControlsOpen(!isControlsOpen)}
      >
        <img 
          src="/hamburger-icon-50.png" 
          alt="Menu" 
          className="w-6 h-6"
          style={{ filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none' }}
        />
      </button>
      <div className={`absolute top-4 right-4 flex items-center gap-2.5 max-sm:hidden max-sm:flex-col max-sm:gap-2.5 max-sm:top-[50px] max-sm:right-2.5 max-sm:bg-[rgba(100,100,100,0.9)] max-sm:p-[15px] max-sm:rounded-lg max-sm:z-[2000] max-sm:min-w-[150px] max-sm:text-white max-sm:border max-sm:border-[rgba(255,255,255,0.2)] ${isControlsOpen ? 'max-sm:flex' : ''}`}>
        <button 
          className="cursor-pointer bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.3)] p-[5px] rounded-full text-white text-xl transition-all duration-300 flex items-center justify-center w-10 h-10 hover:bg-[rgba(255,255,255,0.2)] hover:rotate-[15deg]" 
          onClick={() => { toggleTheme(); setIsControlsOpen(false); }} 
          title={t.themeSwitcher}
        >
          🌓
        </button>
        <select 
          className="bg-[rgba(255,255,255,0.1)] text-white border border-[#757575] p-[8px_12px] rounded-lg cursor-pointer text-sm outline-none transition-[background,border-color] duration-300 hover:bg-[rgba(255,255,255,0.2)] hover:border-white [&>option]:bg-[#4a4a4a] [&>option]:text-white" 
          onChange={changeLanguage} 
          value={lang} 
          title={t.languageSelector}
        >
          <option value="en">English</option>
          <option value="cz">Čeština</option>
          <option value="ar">العربية</option>
        </select>
      </div>
      <h1 className="text-2xl font-bold">{t.title}</h1>
    </header>
  );
}
