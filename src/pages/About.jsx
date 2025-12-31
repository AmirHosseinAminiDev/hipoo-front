import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const values = [
  { title: 'کیفیت', desc: 'تجهیزات برند، فضای تمیز و استانداردهای بین‌المللی در هر بخش باشگاه.' },
  { title: 'تعهد', desc: 'همراهی مربیان در تمام مراحل پیشرفت و ارائه بازخورد دقیق.' },
  { title: 'پیشرفت', desc: 'اندازه‌گیری منظم KPI و بروزرسانی برنامه‌ها برای رشد پایدار.' },
];

function About() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="درباره آرتمیس"
        title="باشگاهی مدرن برای نسل تازه ورزش"
        description="از سال ۱۳۹۵ با رویکرد علمی و فضای پرانرژی در کنار اعضا هستیم. تمرکز ما روی نتیجه‌گیری واقعی است."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="space-y-4">
          <h3 className="text-2xl font-bold text-white">داستان ما</h3>
          <p className="text-gray leading-7">
            آرتمیس با هدف ارائه تجربه‌ای متفاوت از باشگاه‌داری تاسیس شد؛ فضایی که ترکیبی از طراحی مدرن، مربیان متخصص و
            فناوری پایش پیشرفت باشد. امروز بیش از ۲۲۰۰ عضو فعال داریم و هر ماه به خانواده آرتمیس افزوده می‌شود.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-4 text-center">
              <div className="text-2xl font-black text-primary">+۱۵۰۰ m²</div>
              <p className="text-sm text-gray">فضای تمرینی و تخصصی</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-4 text-center">
              <div className="text-2xl font-black text-primary">+۴۰</div>
              <p className="text-sm text-gray">دستگاه و تجهیز برند</p>
            </div>
          </div>
        </Card>
        <Card className="grid gap-4 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
            alt="باشگاه"
            className="h-full w-full rounded-2xl object-cover border border-white/10"
          />
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white">چرا آرتمیس؟</h3>
            <ul className="space-y-3 text-gray">
              <li>برنامه‌ریزی بر اساس ارزیابی بدن و هدف</li>
              <li>کلاس‌های اختصاصی بانوان و کراس‌فیت</li>
              <li>اپلیکیشن داخلی برای پیگیری تمرین و تغذیه</li>
            </ul>
            <div className="space-y-2">
              <p className="text-sm text-gray">ارزش‌های ما</p>
              <div className="flex flex-wrap gap-2">
                {values.map((item) => (
                  <Badge key={item.title}>{item.title}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default About;
