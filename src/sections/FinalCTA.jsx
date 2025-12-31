import React from 'react';
import Button from '../ui/Button';

function FinalCTA() {
  return (
    <section className="rounded-3xl border border-primary/30 bg-gradient-to-l from-primary/10 via-transparent to-primary/10 px-8 py-10 text-center">
      <div className="space-y-4">
        <span className="badge-pill bg-white/10 text-white">حرکت بعدی با توست</span>
        <h3 className="text-3xl font-black text-white">برای جلسه مشاوره رایگان رزرو کن</h3>
        <p className="text-gray leading-7">
          فرم کوتاه را پر کن تا کارشناسان ما با تو تماس بگیرند و مسیر پیشرفتت را طراحی کنیم.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button as="a" href="/contact" variant="primary">
            شروع عضویت
          </Button>
          <Button as="a" href="tel:02122334455" variant="outline">
            تماس فوری ۰۲۱-۲۲۳۳۴۴۵۵
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
