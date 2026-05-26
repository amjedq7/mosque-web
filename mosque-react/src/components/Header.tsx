export default function Header({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <header>
      <img src="/mosque-logo.png" alt="Logo" className="logo" />
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
      <div className="top-controls">
        <button id="theme-btn" className="theme-switcher">☀️</button>
        <select className="language-select">
          <option value="en">English</option>
          <option value="cz">Čeština</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </header>
  );
}
