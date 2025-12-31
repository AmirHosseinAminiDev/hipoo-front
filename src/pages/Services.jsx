import React, { useState } from 'react';
import { Dumbbell, Flame, Sparkles, UserRoundCheck, UtensilsCrossed, Info } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { services } from '../data/services';

const iconMap = {
  dumbbell: Dumbbell,
  flame: Flame,
  sparkles: Sparkles,
  'user-round-check': UserRoundCheck,
  'utensils-crossed': UtensilsCrossed,
};

function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="تمامی خدمات"
        title="هرآنچه برای پیشرفت نیاز داری"
        description="خدمات تخصصی با مربیان تایید شده و تجهیزات مدرن در محیطی انگیزشی."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <Card key={service.id} className="space-y-4" id={service.id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/15 p-3 text-primary">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-sm text-gray">مربیان تایید شده فدراسیون</p>
                  </div>
                </div>
                <Badge variant="accent">اختصاصی</Badge>
              </div>
              <p className="text-gray leading-7">{service.description}</p>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setSelected(service)}>
                  جزئیات
                </Button>
                <Button as="a" href="/contact" className="flex-1">
                  رزرو زمان
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)} title={selected?.title}>
        <div className="space-y-4">
          <p className="leading-7 text-gray-100">{selected?.details}</p>
          <div className="flex items-center gap-2 text-sm text-gray">
            <Info size={18} className="text-primary" />
            <span>برای دریافت برنامه اختصاصی فرم تماس را پر کنید یا با پذیرش تماس بگیرید.</span>
          </div>
          <Button as="a" href="/contact" className="w-full">
            هماهنگی با تیم پذیرش
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Services;
