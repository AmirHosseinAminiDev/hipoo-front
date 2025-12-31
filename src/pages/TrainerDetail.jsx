import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Phone, CalendarClock } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import { trainers } from '../data/trainers';

function TrainerDetail() {
  const { id } = useParams();
  const trainer = trainers.find((item) => item.id === id);

  if (!trainer) {
    return (
      <div className="space-y-4 text-center">
        <p className="text-lg text-gray">مربی مورد نظر یافت نشد.</p>
        <Link to="/trainers" className="text-primary">
          بازگشت به لیست مربیان
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="پروفایل مربی"
        title={`همراهت می‌شود: ${trainer.name}`}
        description={trainer.role}
      />
      <Card className="grid gap-6 md:grid-cols-[260px_1fr]">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="h-full w-full rounded-3xl object-cover border border-white/10"
        />
        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="text-3xl font-black text-white">{trainer.name}</h1>
            <p className="text-gray">{trainer.experience}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {trainer.specialties.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <p className="text-gray leading-7">{trainer.bio}</p>
          <div className="space-y-3">
            <h4 className="font-bold text-white">زمان‌های آزاد</h4>
            <div className="flex flex-wrap gap-2 text-sm text-gray">
              {trainer.availability.map((slot) => (
                <span key={slot} className="badge-pill bg-white/5 text-white">
                  {slot}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button as="a" href="/contact">
              هماهنگی جلسه
            </Button>
            <Button as="a" href="tel:02122334455" variant="outline" className="flex items-center gap-2">
              <Phone size={16} /> تماس با پذیرش
            </Button>
          </div>
          <Link to="/trainers" className="flex items-center gap-2 text-primary">
            <ArrowRight size={16} /> بازگشت به مربیان
          </Link>
        </div>
      </Card>
      <Card className="space-y-4">
        <div className="flex items-center gap-2 text-primary">
          <CalendarClock size={18} />
          <span className="font-semibold">جلسه ارزیابی اولیه رایگان</span>
        </div>
        <p className="text-gray leading-7">
          برای شروع همکاری با {trainer.name} یک جلسه ارزیابی ۳۰ دقیقه‌ای شامل آنالیز حرکت و تعیین KPI برگزار می‌شود.
        </p>
        <Button as="a" href="/contact" variant="primary" className="w-full md:w-auto">
          رزرو ارزیابی
        </Button>
      </Card>
    </div>
  );
}

export default TrainerDetail;
