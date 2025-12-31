import React, { useEffect, useState } from 'react';
import { galleryItems } from '../data/gallery';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

function GalleryPreview() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % galleryItems.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="نگاهی به فضا"
        title="گالری تصاویر باشگاه"
        description="چند نمای سریع از سالن، کلاس‌ها و فضای پرانرژی آرتمیس. برای دیدن جزئیات بیشتر وارد صفحه گالری شوید."
      />

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-card">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative md:col-span-2">
            {galleryItems.map((item, idx) => (
              <div
                key={item.src + idx}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  idx === active ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                <img src={item.src} alt={item.title} className="h-full w-full rounded-2xl object-cover" loading="lazy" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
                <div className="absolute bottom-4 right-4 space-y-2 text-right">
                  <span className="badge-pill bg-primary/20 text-primary">{item.title}</span>
                  <p className="max-w-lg text-sm text-gray-100">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            {galleryItems.map((item, idx) => (
              <button
                key={item.title + idx}
                className={`group flex items-center gap-3 rounded-2xl border px-3 py-2 text-right transition-all ${
                  idx === active
                    ? 'border-primary/50 bg-primary/10 text-white'
                    : 'border-white/5 bg-black/30 text-gray-200 hover:border-primary/40 hover:bg-primary/5'
                }`}
                onClick={() => setActive(idx)}
              >
                <img src={item.src} alt="" className="h-14 w-14 rounded-xl object-cover" loading="lazy" />
                <div className="space-y-1">
                  <div className="text-sm font-bold">{item.title}</div>
                  <div className="text-xs text-gray-300 line-clamp-2">{item.description}</div>
                </div>
              </button>
            ))}
            <Button as="a" href="/gallery" variant="primary" className="mt-auto w-full justify-center">
              مشاهده گالری کامل
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryPreview;
