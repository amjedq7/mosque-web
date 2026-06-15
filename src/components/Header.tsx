import { useState } from 'react';
import { translations } from '../translations';

export default function Header({ 
  lang,
  onLanguageChange, 
  theme, 
  toggleTheme 
}: { 
  lang: string,
  onLanguageChange: (lang: string) => void,
  theme: string,
  toggleTheme: () => void
}) {
  const [isControlsOpen, setIsControlsOpen] = useState(false);

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    localStorage.setItem('lang', newLang);
    onLanguageChange(newLang);
    setIsControlsOpen(false);
  };

  const t = translations[lang as keyof typeof translations] || translations.en;

  return (
    <header className="bg-[var(--header-bg)] text-white p-2 flex flex-col justify-center items-center relative min-h-[120px] text-center">
      <button 
        className="hidden max-sm:block absolute top-2.5 right-2.5 bg-transparent border-none text-2xl cursor-pointer z-[2001]" 
        onClick={() => setIsControlsOpen(!isControlsOpen)}
        aria-label="Toggle menu"
        aria-expanded={isControlsOpen}
        aria-controls="mobile-menu"
      >
        <img 
          src="/hamburger-icon-50.png" 
          alt="" 
          aria-hidden="true"
          className="w-6 h-6"
          style={{ filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'none' }}
        />
      </button>
      <div 
        id="mobile-menu"
        className={`absolute top-4 right-4 flex items-center gap-2.5 max-sm:flex-col max-sm:gap-2.5 max-sm:top-[50px] max-sm:right-2.5 max-sm:bg-[var(--card-bg)] max-sm:p-[15px] max-sm:rounded-lg max-sm:z-[2000] max-sm:min-w-[150px] max-sm:text-white max-sm:border max-sm:border-[rgba(255,255,255,0.1)] ${isControlsOpen ? 'flex' : 'max-sm:hidden'}`}
      >
        <button 
          className={`cursor-pointer border border-[rgba(255,255,255,0.3)] p-[5px] rounded-full text-xl transition-all duration-300 flex items-center justify-center w-10 h-10 ${theme === 'light' ? 'bg-[var(--card-bg)] text-black hover:bg-[rgba(0,0,0,0.1)]' : 'bg-[#4a4a4a] text-white hover:bg-[#333]'} hover:rotate-[15deg]`}
          onClick={() => { toggleTheme(); setIsControlsOpen(false); }} 
          title={t.themeSwitcher}
          aria-label={t.themeSwitcher}
        >
          <span aria-hidden="true">{theme === 'light' ? '☀️' : '🌙'}</span>
        </button>
        <select 
          className={`${theme === 'light' ? 'bg-[var(--card-bg)] text-black border-black hover:bg-gray-200' : 'bg-[#4a4a4a] text-white border-[#757575] hover:border-white'} p-[8px_12px] rounded-lg cursor-pointer text-sm outline-none transition-[background,border-color] duration-300 [&>option]:bg-white [&>option]:text-black`} 
          onChange={changeLanguage} 
          value={lang} 
          title={t.languageSelector}
          aria-label={t.languageSelector}
        >
          <option value="en">English</option>
          <option value="cz">Čeština</option>
          <option value="ar">العربية</option>
        </select>
      </div>
      <h1 className={`text-4xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}>{t.title}</h1>
    </header>
  );
}
