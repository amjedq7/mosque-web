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
      
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem', border: '2px solid #555' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '1rem', background: 'var(--surface-variant)', border: '1px solid #555' }}>Name</th>
            <th style={{ textAlign: 'left', padding: '1rem', background: 'var(--surface-variant)', border: '1px solid #555' }}>Function</th>
            <th style={{ textAlign: 'left', padding: '1rem', background: 'var(--surface-variant)', border: '1px solid #555' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index} style={{ background: index % 2 === 0 ? 'var(--surface-color)' : 'var(--surface-variant)' }}>
              <td style={{ padding: '1rem', color: 'var(--text-primary)', border: '1px solid #555' }}>{contact.name}</td>
              <td style={{ padding: '1rem', color: 'var(--text-primary)', border: '1px solid #555' }}>{contact.function}</td>
              <td style={{ padding: '1rem', color: 'var(--accent-color)', border: '1px solid #555' }}>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>


      <div style={{ marginTop: '3rem', padding: '1rem', background: 'var(--surface-variant)', color: 'var(--text-primary)', borderRadius: '8px', textAlign: 'center' }}>
        <p>{t.mosqueEmail}: <a href="mailto:info@mosque.org" style={{color: 'var(--accent-color)', fontWeight: 'bold', textDecoration: 'none'}}>info@mosque.org</a></p>
      </div>
    </div>
  );
}
