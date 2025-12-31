import React from 'react';
import clsx from 'clsx';

function SectionTitle({ eyebrow, title, description, align = 'right' }) {
  return (
    <div className={clsx('space-y-3', align === 'center' && 'text-center mx-auto max-w-3xl')}>
      {eyebrow && <span className="badge-pill bg-primary/20 text-primary">{eyebrow}</span>}
      <h2 className="text-3xl md:text-4xl font-black text-white">{title}</h2>
      {description && <p className="text-gray leading-7">{description}</p>}
    </div>
  );
}

export default SectionTitle;
