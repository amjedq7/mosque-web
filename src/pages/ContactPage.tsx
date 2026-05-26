export default function ContactPage({ t }: { t: any }) {
  return (
    <>
      <h2>{t.contactTitle}</h2>
      <p>{t.contactDesc}</p>
      <p>{t.email}: <a href="mailto:info@mosque.org" style={{color: 'var(--white)'}}>info@mosque.org</a></p>
    </>
  );
}
