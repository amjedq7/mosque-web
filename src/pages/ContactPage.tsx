interface Contact {
  name: string;
  function: string;
  email: string;
}

const contacts: Contact[] = [
  { name: 'Ahmed Hassan', function: 'Imam', email: 'ahmed.h@example.com' },
  { name: 'Fatima Zahra', function: 'Administrator', email: 'fatima.z@example.com' },
  { name: 'Omar Farooq', function: 'Events Coordinator', email: 'omar.f@example.com' },
  { name: 'Layla Noor', function: 'Teacher', email: 'layla.n@example.com' },
  { name: 'Yusuf Ibrahim', function: 'Community Outreach', email: 'yusuf.i@example.com' },
];

export default function ContactPage({ t }: { t: any }) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h2>{t.contactTitle}</h2>
      <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>{t.contactDesc}</p>
      
      <div className="contact-table-container">
        <table className="desktop-table" style={{ width: '100%', borderCollapse: 'collapse', border: '2px solid #555' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'center', padding: '0.75rem', background: 'var(--surface-variant)', border: '1px solid #555' }}>{t.nameLabel}</th>
              <th style={{ textAlign: 'center', padding: '0.75rem', background: 'var(--surface-variant)', border: '1px solid #555' }}>{t.functionLabel}</th>
              <th style={{ textAlign: 'center', padding: '0.75rem', background: 'var(--surface-variant)', border: '1px solid #555' }}>{t.emailLabel}</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} style={{ background: index % 2 === 0 ? 'var(--surface-color)' : 'var(--surface-variant)' }}>
                <td style={{ padding: '0.75rem', color: 'var(--text-primary)', border: '1px solid #555', textAlign: 'center' }}>{contact.name}</td>
                <td style={{ padding: '0.75rem', color: 'var(--text-primary)', border: '1px solid #555', textAlign: 'center' }}>{contact.function}</td>
                <td style={{ padding: '0.75rem', color: 'var(--accent-color)', border: '1px solid #555', textAlign: 'center' }}>{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mobile-cards">
          {contacts.map((contact, index) => (
            <div key={index} style={{ border: '1px solid #555', padding: '1rem', marginBottom: '1rem', borderRadius: '8px', background: 'var(--surface-color)', textAlign: 'center' }}>
              <p style={{ margin: '0.25rem 0' }}><strong>{t.nameLabel}:</strong> {contact.name}</p>
              <p style={{ margin: '0.25rem 0' }}><strong>{t.functionLabel}:</strong> {contact.function}</p>
              <p style={{ margin: '0.25rem 0' }}><strong>{t.emailLabel}:</strong> {contact.email}</p>
            </div>
          ))}
        </div>
      </div>


      <div style={{ marginTop: '3rem', padding: '1rem', background: 'var(--surface-variant)', color: 'var(--text-primary)', borderRadius: '8px', textAlign: 'center' }}>
        <p style={{ marginBottom: '0.5rem' }}>{t.mosqueEmail}: <a href="mailto:info@mosque.org" style={{color: 'var(--accent-color)', fontWeight: 'bold', textDecoration: 'none'}}>info@mosque.org</a></p>
        <p style={{ marginTop: '0.5rem' }}><strong>{t.address}:</strong> U Nových lázní 1224, 415 01 Teplice 1</p>
      </div>

      <div style={{ marginTop: '2rem', borderRadius: '8px', overflow: 'hidden', border: '2px solid #555' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.176214178553!2d13.824855476713506!3d50.63857507163821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47099d255953043f%3A0x6b8405d454a88f56!2sU%20Nov%C3%BDch%20l%C3%A1zn%C3%AD%201224%2C%20415%2001%20Teplice!5e0!3m2!1sen!2scz!4v1717089400000!5m2!1sen!2scz"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Mosque Location"
        ></iframe>
      </div>
    </div>
  );
}
