export default function PrivacyPolicyPage({ t }: { t: any }) {
  return (
    <div className={`max-w-[800px] mx-auto p-4 text-[var(--text-color)] ${t.lang === 'ar' ? 'text-right' : 'text-left'}`}>
      <h2 className="text-2xl font-bold mb-6">{t.privacyPolicy}</h2>
      <p className="mb-4">{t.privacyPolicyText}</p>
    </div>
  );
}
