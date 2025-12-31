import React from 'react';
import { Dumbbell, Flame, Sparkles, UserRoundCheck, UtensilsCrossed, ArrowLeft } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { services } from '../data/services';

const iconMap = {
  dumbbell: Dumbbell,
  flame: Flame,
  sparkles: Sparkles,
  'user-round-check': UserRoundCheck,
  'utensils-crossed': UtensilsCrossed,
};

function ServicesPreview() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="خدمات اختصاصی"
        title="هر هدفی داری، مسیرش را برایت می‌سازیم"
        description="از تمرینات قدرتی تا تغذیه دقیق و مربی خصوصی؛ همه‌چیز در یک باشگاه پریمیوم."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <Card key={service.id} className="space-y-4 border-white/10 bg-[#0f172a]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-primary/20 p-3 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <ArrowLeft size={16} className="text-gray" />
              </div>
              <p className="text-gray leading-7">{service.description}</p>
              <Button as="a" href={`/services#${service.id}`} variant="ghost" className="px-0">
                بیشتر بدانید
              </Button>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesPreview;
