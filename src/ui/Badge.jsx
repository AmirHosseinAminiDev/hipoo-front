import React from 'react';
import clsx from 'clsx';

function Badge({ children, variant = 'default', className }) {
  const styles = clsx(
    'badge-pill',
    variant === 'accent' && 'bg-primary/20 text-primary border-primary/40',
    className
  );
  return <span className={styles}>{children}</span>;
}

export default Badge;
