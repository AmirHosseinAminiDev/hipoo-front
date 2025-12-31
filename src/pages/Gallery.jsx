import React, { useEffect, useMemo, useState } from 'react';
import { galleryItems } from '../data/gallery';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

function Gallery() {
  const [active, setActive] = useState(0);
  const featured = useMemo(() => galleryItems.slice(0, 4), []);
  const rest = useMemo(() => galleryItems.slice(4), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % featured.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [featured.length]);

  return (
    <div className="space-y-12">
      <div className="rounded-3xl bg-gradient-to-l from-primary/20 via-black/20 to-black/50 border border-white/10 p-8 shadow-card">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4 text-right">
            <p className="badge-pill bg-white/10 text-primary">آلبوم تصویری</p>
            <h1 className="text-4xl font-black leading-tight text-white">گالری لحظه‌های انرژی و تمرکز</h1>
            <p className="text-gray-200 leading-8">
              نگاهی نزدیک به سالن آرتمیس؛ از کلاس‌های گروهی پرشور تا فضای اختصاصی تمرین و تجهیزات پیشرفته. همه عکس‌ها
              به‌صورت زنده از محیط باشگاه گرفته شده‌اند تا حس واقعی را منتقل کنند.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button as="a" href="/contact" variant="primary">
                رزرو بازدید حضوری
              </Button>
              <Button as="a" href="/" variant="outline">
                بازگشت به خانه
              </Button>
            </div>
          </div>
          <div className="relative h-80 overflow-hidden rounded-3xl border border-white/10 bg-black/30">
            {featured.map((item, idx) => (
              <div
                key={item.src + idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === active ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img src={item.src} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
                <div className="absolute bottom-4 right-4 left-4 flex items-center justify-between rounded-2xl bg-black/40 p-3 text-sm text-white backdrop-blur">
                  <div className="flex flex-col text-right">
                    <span className="font-bold">{item.title}</span>
                    <span className="text-xs text-gray-200">{item.description}</span>
                  </div>
                  <div className="flex gap-2">
                    {featured.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setActive(dotIdx)}
                        className={`h-2 w-2 rounded-full transition-all ${dotIdx === idx ? 'bg-primary' : 'bg-white/40'}`}
                        aria-label={`تصویر ${dotIdx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SectionTitle
        eyebrow="همه تصاویر"
        title="فضاهای مختلف باشگاه"
        description="از سالن‌های تخصصی گرفته تا تجهیزات و لحظه‌های تمرین؛ همه را اینجا ببین."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, idx) => (
          <div
            key={item.title + idx}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-black/30 shadow-card"
          >
            <img src={item.src} alt={item.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />
            <div className="absolute inset-x-4 bottom-4 space-y-1 text-right">
              <div className="text-lg font-bold text-white drop-shadow">{item.title}</div>
              <div className="text-xs text-gray-200">{item.description}</div>
            </div>
          </div>
        ))}
      </div>

      {rest.length > 0 && (
        <div className="rounded-3xl border border-primary/30 bg-primary/10 p-6 shadow-card">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2 text-right">
              <div className="text-xl font-bold text-white">تصاویر ویژه با تمرکز بر تجربه</div>
              <p className="text-gray-200 text-sm">
                این مجموعه نشان می‌دهد چطور محیط آرام و تجهیزات به‌روز کنار هم آمده‌اند تا تمرین دلنشین‌تر شود.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {rest.map((item, idx) => (
                <img
                  key={item.title + idx}
                  src={item.src}
                  alt={item.title}
                  className="h-20 w-28 rounded-xl object-cover border border-white/10 shadow"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
