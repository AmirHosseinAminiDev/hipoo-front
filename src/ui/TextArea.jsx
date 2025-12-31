import React from 'react';
import clsx from 'clsx';

function TextArea({ label, rows = 4, className, ...props }) {
  return (
    <label className="block space-y-2 text-sm text-gray-200">
      {label && <span className="font-semibold text-gray-100">{label}</span>}
      <textarea
        rows={rows}
        className={clsx(
          'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray/80 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40',
          className
        )}
        {...props}
      />
    </label>
  );
}

export default TextArea;
