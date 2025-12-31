import React from 'react';
import { MapPin, Phone, Clock3, Send } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';

function Contact() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="تماس"
        title="با ما در تماس باش"
        description="سوال داری یا می‌خواهی جلسه رایگان رزرو کنی؟ فرم زیر را ارسال کن یا مستقیم تماس بگیر."
      />

      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <Card className="space-y-5">
          <h3 className="text-xl font-bold text-white">فرم تماس</h3>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="name" label="نام و نام خانوادگی" placeholder="مثلاً مریم احمدی" required />
              <Input name="phone" label="شماره تماس" placeholder="۰۹۱۲xxxxxxx" required />
            </div>
            <TextArea name="message" label="پیام" placeholder="هدف و زمان مدنظرت را بنویس" rows={5} />
            <Button type="submit" className="w-full">
              ارسال پیام <Send size={16} />
            </Button>
          </form>
        </Card>

        <div className="space-y-4">
          <Card className="space-y-3">
            <div className="flex items-center gap-2 text-primary">
              <MapPin size={18} />
              <span className="font-semibold">آدرس</span>
            </div>
            <p className="text-gray">تهران، خیابان ولیعصر، نبش کوچه نهم، باشگاه آرتمیس</p>
            <div className="flex items-center gap-2 text-primary">
              <Phone size={18} />
              <span className="font-semibold">۰۲۱-۲۲۳۳۴۴۵۵</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Clock3 size={18} />
              <span className="font-semibold">۶ صبح تا ۱۲ شب - هر روز</span>
            </div>
          </Card>
          <Card className="space-y-3">
            <h4 className="text-lg font-bold text-white">لوکیشن</h4>
            <div className="flex h-48 items-center justify-center rounded-2xl bg-gradient-to-br from-white/5 to-black/20 text-gray">
              نقشه اینجا قرار می‌گیرد
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Contact;
