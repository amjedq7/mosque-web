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
    <div className="max-w-[800px] mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{t.contactTitle}</h2>
      <p className="mb-8 text-gray-400">{t.contactDesc}</p>
      
      <div className="contact-table-container">
        <table className="hidden md:table w-full border-collapse border-2 border-[#555]">
          <thead>
            <tr>
              <th className="text-center p-3 bg-gray-800 border border-[#555]">{t.nameLabel}</th>
              <th className="text-center p-3 bg-gray-800 border border-[#555]">{t.functionLabel}</th>
              <th className="text-center p-3 bg-gray-800 border border-[#555]">{t.emailLabel}</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800'}>
                <td className="p-3 border border-[#555] text-center">{contact.name}</td>
                <td className="p-3 border border-[#555] text-center">{contact.function}</td>
                <td className="p-3 border border-[#555] text-center text-gray-400">{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="md:hidden">
          {contacts.map((contact, index) => (
            <div key={index} className="border border-[#555] p-4 mb-4 rounded-lg bg-gray-900 text-center">
              <p className="my-1"><strong>{t.nameLabel}:</strong> {contact.name}</p>
              <p className="my-1"><strong>{t.functionLabel}:</strong> {contact.function}</p>
              <p className="my-1"><strong>{t.emailLabel}:</strong> {contact.email}</p>
            </div>
          ))}
        </div>
      </div>


      <div className="mt-12 p-4 bg-gray-800 rounded-lg text-center">
        <p className="mb-2">{t.mosqueEmail}: <a href="mailto:info@mosque.org" className="text-gray-400 font-bold hover:underline">info@mosque.org</a></p>
        <p className="mt-2"><strong>{t.address}:</strong> U Nových lázní 1224, 415 01 Teplice 1</p>
      </div>

      <div className="mt-8 rounded-lg overflow-hidden border-2 border-[#555]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.176214178553!2d13.824855476713506!3d50.63857507163821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47099d255953043f%3A0x6b8405d454a88f56!2sU%20Nov%C3%BDch%20l%C3%A1zn%C3%AD%201224%2C%20415%2001%20Teplice!5e0!3m2!1sen!2scz!4v1717089400000!5m2!1sen!2scz"
          width="100%"
          height="300"
          className="border-0"
          allowFullScreen
          loading="lazy"
          title="Mosque Location"
        ></iframe>
      </div>
    </div>
  );
}
