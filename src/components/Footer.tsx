import { Link } from 'react-router-dom';

interface FooterProps {
  t: any;
  lang: string;
}

const Footer = ({ t, lang }: FooterProps) => {
  return (
    <footer 
      className="flex flex-col p-5 text-[var(--footer-text)] bg-[var(--footer-bg)] text-sm w-full box-border items-center"
    >
      <div className="flex flex-col gap-5 mb-5 items-center">
        <div className="max-w-[400px] text-left">
          <strong className="block">{t.legalName}</strong>
          <p className="my-1.5">{t.legalAddress}</p>
          <p className="my-1.5">{t.legalIco}</p>
          <p className="my-1.5">{t.legalRegistry}</p>
        </div>
        <div className="text-center">
          <Link to="/privacy-policy" className="text-[var(--footer-text)] underline">{t.privacyPolicy}</Link>
        </div>
      </div>
      <div className="border-t border-[rgba(128,128,128,0.3)] pt-2.5 w-full text-center">
        {t.copyright}
      </div>
    </footer>
  );
};

export default Footer;
