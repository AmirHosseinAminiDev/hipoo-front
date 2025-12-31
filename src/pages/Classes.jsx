import React, { useMemo, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { classes } from '../data/classes';

function Classes() {
  const [dayFilter, setDayFilter] = useState('همه');
  const [typeFilter, setTypeFilter] = useState('همه');

  const days = ['همه', ...new Set(classes.map((item) => item.day))];
  const types = ['همه', ...new Set(classes.map((item) => item.type.split(' ')[0]))];

  const filtered = useMemo(() => {
    return classes.filter((item) => {
      const matchDay = dayFilter === 'همه' || item.day === dayFilter;
      const matchType = typeFilter === 'همه' || item.type.startsWith(typeFilter);
      return matchDay && matchType;
    });
  }, [dayFilter, typeFilter]);

  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="کلاس‌ها"
        title="برنامه کلاس‌ها و ظرفیت‌ها"
        description="کلاس‌های گروهی پرانرژی با ظرفیت محدود. روز و نوع کلاس را فیلتر کن و سریع رزرو کن."
      />

      <div className="flex flex-wrap gap-3">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setDayFilter(day)}
            className={`badge-pill ${dayFilter === day ? 'bg-primary/20 text-primary border-primary/50' : 'bg-white/5 text-white'}`}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setTypeFilter(type)}
            className={`badge-pill ${typeFilter === type ? 'bg-primary/20 text-primary border-primary/50' : 'bg-white/5 text-white'}`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filtered.map((item) => (
          <Card key={item.id} className="grid gap-4 md:grid-cols-[1.5fr_1fr_1fr] items-center">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">{item.type}</h3>
              <p className="text-gray">مربی: {item.coach}</p>
            </div>
            <div className="flex items-center gap-3 text-gray">
              <Badge variant="accent">{item.day}</Badge>
              <span className="badge-pill bg-white/5 text-white">{item.time}</span>
            </div>
            <div className="flex items-center justify-between md:justify-end md:gap-4">
              <span className={`text-sm font-semibold ${item.status.includes('تکمیل') ? 'text-gray' : 'text-primary'}`}>
                {item.status}
              </span>
              <span className="badge-pill bg-black/40 text-white">ظرفیت: {item.capacity}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Classes;
