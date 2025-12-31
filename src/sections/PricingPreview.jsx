import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { plans } from '../data/pricing';

function PricingPreview() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="پلن‌های منعطف"
        title="بهترین گزینه را برای پیشرفت انتخاب کن"
        description="پلن‌های ماهانه تا سالانه با پشتیبانی مربیان و مزایای اختصاصی برای اعضای وفادار."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative space-y-6 border-white/10 bg-[#0f172a] ${plan.popular ? 'ring-2 ring-primary/60' : ''}`}
          >
            {plan.popular && <Badge variant="accent" className="absolute left-4 top-4">{plan.tag}</Badge>}
            <div className="space-y-3">
              <h3 className="text-2xl font-black text-white">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-primary">{plan.price} تومان</p>
              <p className="text-sm text-gray">دسترسی کامل به سالن و پشتیبانی آنلاین</p>
            </div>
            <ul className="space-y-3 text-gray">
              {plan.features.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button as="a" href="/pricing" variant={plan.popular ? 'primary' : 'outline'} className="w-full">
              شروع عضویت
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default PricingPreview;
