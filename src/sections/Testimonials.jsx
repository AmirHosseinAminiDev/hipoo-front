import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const testimonials = [
  {
    name: 'الهام رضایی',
    role: 'عضو فیتنس بانوان',
    content: 'در سه ماه با برنامه مربی و مشاوره تغذیه ۶ کیلو چربی کم کردم و فرم بدنم عالی شده.',
  },
  {
    name: 'محمد امیری',
    role: 'عضو کراس‌فیت',
    content: 'کلاس‌های کراس‌فیت انرژی بی‌نظیری دارند و مربیان روی تکنیک خیلی دقیق هستند.',
  },
  {
    name: 'نیما فرهی',
    role: 'عضو بدنسازی',
    content: 'تجهیزات جدید، فضای تمیز و برنامه‌های تخصصی باعث شد در شش ماه ۸ کیلو عضله اضافه کنم.',
  },
];

function Testimonials() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="نظرات اعضا"
        title="کسانی که مسیر را رفته‌اند چه می‌گویند؟"
        description="تجربه واقعی اعضای آرتمیس از برنامه‌های تمرینی و تغذیه اختصاصی."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.name} className="space-y-4">
            <Badge variant="accent">امتیاز ۵/۵</Badge>
            <p className="text-lg leading-8 text-gray-100">“{item.content}”</p>
            <div>
              <div className="font-bold text-white">{item.name}</div>
              <div className="text-sm text-gray">{item.role}</div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
