import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { plans } from '../data/pricing';

function Pricing() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="پلن‌های عضویت"
        title="هر سطحی که باشی، یک پلن مناسب داری"
        description="از تجربه کوتاه‌مدت تا همراهی بلندمدت؛ همراه با پشتیبانی مربیان و دسترسی کامل."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative flex h-full flex-col gap-6 border-white/10 bg-[#0f172a] ${plan.popular ? 'ring-2 ring-primary/60' : ''}`}
          >
            {plan.popular && (
              <Badge variant="accent" className="absolute left-4 top-4 flex items-center gap-2">
                <Sparkles size={14} /> {plan.tag}
              </Badge>
            )}
            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">{plan.name}</h3>
              <p className="text-4xl font-extrabold text-primary">{plan.price} تومان</p>
              <p className="text-sm text-gray">امکان پرداخت آنلاین یا در محل باشگاه</p>
            </div>
            <ul className="space-y-3 text-gray">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button as="a" href="/contact" variant={plan.popular ? 'primary' : 'outline'} className="w-full">
              شروع عضویت
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
