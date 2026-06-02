import { Link } from 'react-router-dom';

interface FooterProps {
  t: any;
  lang: string;
}

const Footer = ({ t, lang }: FooterProps) => {
  return (
    <footer style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      color: 'var(--footer-text)',
      backgroundColor: 'var(--footer-bg)',
      fontSize: '0.9rem',
      width: '100%',
      boxSizing: 'border-box',
      direction: lang === 'ar' ? 'rtl' : 'ltr',
      textAlign: lang === 'ar' ? 'right' : 'left'
    }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '20px',
        marginBottom: '20px',
        flexDirection: lang === 'ar' ? 'row-reverse' : 'row'
      }}>
        <div style={{ flex: '1 1 300px' }}>
          <strong>{t.legalName}</strong>
          <p style={{ margin: '5px 0' }}>{t.legalAddress}</p>
          <p style={{ margin: '5px 0' }}>{t.legalIco}</p>
          <p style={{ margin: '5px 0' }}>{t.legalRegistry}</p>
        </div>
        <div style={{ flex: '0 0 auto' }}>
          <Link to="/privacy-policy" style={{ color: 'var(--footer-text)', textDecoration: 'underline' }}>{t.privacyPolicy}</Link>
        </div>
      </div>
      <div style={{ textAlign: 'center', borderTop: '1px solid rgba(128,128,128,0.3)', paddingTop: '10px' }}>
        {t.copyright}
      </div>
    </footer>
  );
};

export default Footer;
