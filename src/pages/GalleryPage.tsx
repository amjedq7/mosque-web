export default function GalleryPage({ t }: { t: any }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{t.galleryTitle}</h2>
      <p className="text-lg">{t.galleryDesc}</p>
    </div>
  );
}
