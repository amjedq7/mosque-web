import { Link } from 'react-router-dom';

interface FooterProps {
  t: any;
}

const Footer = ({ t }: FooterProps) => {
  return (
    <footer 
      className="flex flex-col p-5 text-[var(--footer-text)] bg-[var(--footer-stripe-bg)] text-sm w-full box-border items-center text-center shrink-0 mt-auto"
    >
      <div className="mb-4">
        <Link to="/privacy-policy" className="text-[var(--footer-text)] underline">
          {t.privacyPolicy}
        </Link>
      </div>

      <div className="pt-2.5 border-t border-[rgba(128,128,128,0.3)] w-full text-center">
        © 2026 Muslimská obec v Teplicích
      </div>
    </footer>
  );
};

export default Footer;
