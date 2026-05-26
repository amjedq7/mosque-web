import { useEffect } from 'react';

export default function Header({ title, subtitle }: { title: string, subtitle: string }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header>
      <img src="/images/mosque-logo.png" alt="Logo" className="logo" />
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
      <div className="top-controls">
        <button className="theme-switcher" onClick={toggleTheme}>🌓</button>
        <select className="language-select">
          <option value="en">English</option>
          <option value="cz">Čeština</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </header>
  );
}
