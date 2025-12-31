import React from 'react';
import clsx from 'clsx';

const baseStyles =
  'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark gap-2';

const variants = {
  primary:
    'bg-primary text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 px-5 py-3',
  outline:
    'border border-white/20 text-white px-5 py-3 hover:border-primary hover:text-primary hover:bg-primary/10',
  ghost: 'text-white px-4 py-2 hover:text-primary',
};

function Button({ as: Component = 'button', variant = 'primary', children, className, ...props }) {
  return (
    <Component className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </Component>
  );
}

export default Button;
