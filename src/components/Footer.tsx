import { Link } from 'react-router-dom';

interface FooterProps {
  t: any;
  lang: string;
}

const Footer = ({ t, lang }: FooterProps) => {
  const isAr = lang === 'ar';
  
  return (
    <footer 
      className={`flex flex-col p-5 text-[var(--footer-text)] bg-[var(--footer-bg)] text-sm w-full box-border ${isAr ? 'rtl' : 'ltr'}`}
      style={{ textAlign: isAr ? 'right' : 'left' }}
    >
      <div className={`flex flex-wrap justify-between gap-5 mb-5 ${isAr ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="flex-[1_1_300px]">
          <strong className="block">{t.legalName}</strong>
          <p className="my-1.5">{t.legalAddress}</p>
          <p className="my-1.5">{t.legalIco}</p>
          <p className="my-1.5">{t.legalRegistry}</p>
        </div>
        <div className="flex-[0_0_auto]">
          <Link to="/privacy-policy" className="text-[var(--footer-text)] underline">{t.privacyPolicy}</Link>
        </div>
      </div>
      <div className="text-center border-t border-[rgba(128,128,128,0.3)] pt-2.5">
        {t.copyright}
      </div>
    </footer>
  );
};

export default Footer;
