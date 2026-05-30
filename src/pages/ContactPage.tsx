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
        <p>{t.mosqueEmail}: <a href="mailto:info@mosque.org" style={{color: 'var(--accent-color)', fontWeight: 'bold', textDecoration: 'none'}}>info@mosque.org</a></p>
      </div>
    </div>
  );
}
