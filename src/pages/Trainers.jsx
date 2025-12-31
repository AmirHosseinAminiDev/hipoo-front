import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { trainers } from '../data/trainers';

function Trainers() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="مربیان"
        title="با مربیان تخصصی آرتمیس تمرین کن"
        description="هر مربی روی یک حوزه تمرکز دارد تا بتوانی بهترین نتیجه را بگیری."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {trainers.map((trainer) => (
          <Card key={trainer.id} className="grid gap-4 md:grid-cols-[160px_1fr]">
            <img
              src={trainer.image}
              alt={trainer.name}
              className="h-full w-full rounded-2xl object-cover border border-white/10"
            />
            <div className="space-y-3">
              <div>
                <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
                <p className="text-gray">{trainer.role}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {trainer.specialties.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
              <p className="text-gray leading-7">{trainer.bio}</p>
              <div className="flex flex-wrap gap-2 text-sm text-gray">
                {trainer.availability.map((slot) => (
                  <span key={slot} className="badge-pill bg-white/5 text-white">
                    {slot}
                  </span>
                ))}
              </div>
              <Button as="a" href={`/trainers/${trainer.id}`} variant="outline" className="w-full md:w-auto">
                مشاهده پروفایل
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Trainers;
