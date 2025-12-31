import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { trainers } from '../data/trainers';

function TrainersPreview() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="مربیان منتخب"
        title="با تیم مربیان آرتمیس آشنا شو"
        description="هر مربی تخصص مشخصی دارد تا مطابق هدف تو برنامه‌ریزی کند."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trainers.slice(0, 3).map((trainer) => (
          <Card key={trainer.id} className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="h-16 w-16 rounded-2xl object-cover border border-white/10"
              />
              <div>
                <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                <p className="text-sm text-gray">{trainer.role}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {trainer.specialties.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <p className="text-gray leading-7">{trainer.bio}</p>
            <Button as="a" href={`/trainers/${trainer.id}`} variant="outline" className="w-full">
              مشاهده پروفایل
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default TrainersPreview;
