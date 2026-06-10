interface Contact {
  name: string;
  function: string;
  email: string;
}

const contacts = [
  { nameKey: 'placeholderName', functionKey: 'placeholderFunction', emailKey: 'placeholderEmail' },
  { nameKey: 'placeholderName', functionKey: 'placeholderFunction', emailKey: 'placeholderEmail' },
  { nameKey: 'placeholderName', functionKey: 'placeholderFunction', emailKey: 'placeholderEmail' },
  { nameKey: 'placeholderName', functionKey: 'placeholderFunction', emailKey: 'placeholderEmail' },
  { nameKey: 'placeholderName', functionKey: 'placeholderFunction', emailKey: 'placeholderEmail' },
];

export default function ContactPage({ t }: { t: any }) {
  return (
    <div className="max-w-[800px] mx-auto p-4 text-[var(--text-color)]">
      <h2 className="text-2xl font-bold mb-4">{t.contactTitle}</h2>
      <p className="mb-8">{t.contactDesc}</p>

      {/* Desktop Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full border-collapse border border-[var(--nav-border)]">
          <thead>
            <tr className="bg-[rgba(128,128,128,0.2)]">
              <th className="p-3 border border-[var(--nav-border)]">{t.nameLabel}</th>
              <th className="p-3 border border-[var(--nav-border)]">{t.functionLabel}</th>
              <th className="p-3 border border-[var(--nav-border)]">{t.emailLabel}</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-[rgba(128,128,128,0.1)]' : ''}>
                <td className="p-3 border border-[var(--nav-border)] text-center">{t[contact.nameKey]}</td>
                <td className="p-3 border border-[var(--nav-border)] text-center">{t[contact.functionKey]}</td>
                <td className="p-3 border border-[var(--nav-border)] text-center">{t[contact.emailKey]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards (as borderless, bubble-like cards) */}
      <div className="sm:hidden flex flex-col gap-6">
        {contacts.map((contact, index) => (
          <div key={index} className="w-full border border-[var(--nav-border)] p-4 rounded-lg text-left">
            <p className="p-1"><span className="font-bold">{t.nameLabel}:</span> {t[contact.nameKey]}</p>
            <p className="p-1"><span className="font-bold">{t.functionLabel}:</span> {t[contact.functionKey]}</p>
            <p className="p-1"><span className="font-bold">{t.emailLabel}:</span> {t[contact.emailKey]}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-4 bg-[rgba(128,128,128,0.1)] rounded-lg text-center border border-[var(--nav-border)]">
        <p className="mb-2"><strong>{t.mosqueEmail}:</strong> <a href="mailto:mosque@example.com" className="font-bold underline">mosque@example.com</a></p>
        <p className="mt-2"><strong>{t.address}:</strong> U Nových lázní 1224, 415 01 Teplice 1</p>
      </div>

      <div className="mt-8 rounded-lg overflow-hidden border-2 border-[var(--nav-border)]">
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

      <div className="mt-12 p-4 text-sm opacity-80 text-center border-t border-[var(--nav-border)] pt-4">
        <p className="font-bold">Muslimská obec v Teplicích</p>
        <p>{t.legalAddressText}</p>
        <p>{t.legalIcoText}</p>
        <p>{t.legalRegistryText}</p>
      </div>
    </div>
  );
}
