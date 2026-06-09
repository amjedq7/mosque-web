import { Link } from 'react-router-dom';

interface FooterProps {
  t: any;
}

const Footer = ({ t }: FooterProps) => {
  return (
    <footer 
      className="flex flex-col p-5 text-[var(--footer-text)] bg-[var(--footer-bg)] text-sm w-full box-border items-center text-center"
    >
      <div className="mb-4">
        <strong className="block">{t.legalName}</strong>
        <p className="my-1">{t.legalIco}</p>
        <p className="my-1">{t.legalAddress}</p>
      </div>

      <div style={{ fontSize: '0.75rem', opacity: 0.5, marginTop: '5px', marginBottom: '1rem' }}>
        {t.legalRegistry}
      </div>

      <div className="mb-4">
        <Link to="/privacy-policy" className="text-[var(--footer-text)] underline">{t.privacyPolicy}</Link>
      </div>

      <div className="pt-2.5 border-t border-[rgba(128,128,128,0.3)] w-full text-center">
        {t.copyright}
      </div>
    </footer>
  );
};

export default Footer;
