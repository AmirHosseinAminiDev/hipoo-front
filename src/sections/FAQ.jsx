import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Accordion from '../ui/Accordion';
import { faqs } from '../data/faqs';

function FAQ() {
  return (
    <section className="space-y-8">
      <SectionTitle
        eyebrow="سوالات پرتکرار"
        title="پیش از شروع، این پاسخ‌ها را ببین"
        description="اگر سوال دیگری داری از طریق فرم تماس در میان بگذار؛ تیم ما کمتر از ۲۴ ساعت پاسخ می‌دهد."
      />
      <Accordion items={faqs} />
    </section>
  );
}

export default FAQ;
