import { Link } from 'react-router-dom';
import { useTranslation } from '../contexts/TranslationContext';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer 
      className="flex flex-col p-5 text-[var(--footer-text)] text-sm w-full box-border items-center text-center shrink-0 mt-auto"
    >
      <div className="mb-1">
        <Link to="/privacy-policy" className="text-[var(--footer-text)] underline">
          {t.privacyPolicy}
        </Link>
      </div>

      <div className="w-full text-center">
        © 2026 Muslimská obec v Teplicích
      </div>
    </footer>
  );
};

export default Footer;
