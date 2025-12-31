import React from 'react';
import { Flame, ShieldCheck, Sparkle } from 'lucide-react';
import Button from '../ui/Button';

function Hero() {
  const stats = [
    { label: 'اعضا فعال', value: '۲۲۰۰+' },
    { label: 'کلاس در هفته', value: '۵۰+' },
    { label: 'مربی متخصص', value: '۱۸' },
  ];

  return (
    <section className="gradient-hero overflow-hidden rounded-3xl border border-white/10 shadow-card">
      <div className="grid gap-10 p-10 md:grid-cols-2 md:items-center">
        <div className="space-y-8">
          <span className="badge-pill bg-primary/20 text-primary">باشگاه پریمیوم در قلب شهر</span>
          <div className="space-y-4">
            <h1 className="text-4xl leading-tight font-black text-white md:text-5xl">
              بدن قوی، ذهن قوی — همین امروز شروع کن
            </h1>
            <p className="text-lg text-gray leading-8">
              آرتمیس با ترکیب تمرینات علمی، مربیان خبره و فضای انرژی‌بخش به شما کمک می‌کند در کوتاه‌ترین زمان به
              فرم ایده‌آل برسید.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button as="a" href="/contact" variant="primary">
              رزرو جلسه رایگان
            </Button>
            <Button as="a" href="/pricing" variant="outline">
              مشاهده پلن‌ها
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-gray">
            <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
              <Flame className="text-primary" size={18} />
              <span>محیط انگیزشی</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
              <ShieldCheck className="text-primary" size={18} />
              <span>برنامه تخصصی</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
              <Sparkle className="text-primary" size={18} />
              <span>تجهیزات مدرن</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-white/5 blur-3xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-2 gap-4 text-center">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-black/30 p-4">
                  <div className="text-3xl font-black text-primary">{stat.value}</div>
                  <div className="text-gray text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-black/40 px-4 py-3 text-sm text-gray">
                <span>مربی خصوصی + برنامه غذایی</span>
                <span className="text-primary font-bold">۳۵٪ تخفیف</span>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-black/40 px-4 py-3 text-sm text-gray">
                <span>آنالیز ترکیب بدنی و KPI</span>
                <span className="text-white font-semibold">هدیه ثبت‌نام</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
