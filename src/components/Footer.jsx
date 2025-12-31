import React from 'react';
import { Instagram, Phone, MapPin, Clock3 } from 'lucide-react';
import { navLinks } from '../data/navigation';
import Button from '../ui/Button';

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0f172a] mt-16">
      <div className="section-container grid gap-8 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xl font-extrabold text-white">
            <span className="h-3 w-3 rounded-full bg-primary"></span>
            <span>باشگاه آرتمیس</span>
          </div>
          <p className="text-gray leading-7">
            باشگاه تخصصی بدنسازی، کراس‌فیت و فیتنس بانوان با تمرکز بر پیشرفت پایدار و تجهیزات به‌روز.
          </p>
          <Button as="a" href="/contact" variant="outline" className="mt-2">
            رزرو جلسه رایگان
          </Button>
        </div>

        <div>
          <h4 className="text-lg font-bold text-white mb-4">لینک‌های سریع</h4>
          <div className="grid grid-cols-2 gap-3 text-gray">
            {navLinks.map((link) => (
              <a key={link.path} href={link.path} className="hover:text-primary">
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-gray">
          <h4 className="text-lg font-bold text-white mb-4">ارتباط</h4>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-primary" />
            <span>تهران، خیابان ولیعصر، نبش کوچه نهم</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-primary" />
            <a href="tel:02122334455" className="hover:text-primary">
              ۰۲۱-۲۲۳۳۴۴۵۵
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock3 size={18} className="text-primary" />
            <span>هر روز ۶ صبح تا ۱۲ شب</span>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-bold text-white">ما را دنبال کنید</h4>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-gray hover:text-primary hover:border-primary"
            >
              <Instagram size={18} />
              <span>@artemis.gym</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-sm text-gray">
        © {new Date().getFullYear()} باشگاه آرتمیس. همه حقوق محفوظ است.
      </div>
    </footer>
  );
}

export default Footer;
