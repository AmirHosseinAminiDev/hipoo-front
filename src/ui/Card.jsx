import React from 'react';
import clsx from 'clsx';

function Card({ children, className }) {
  return <div className={clsx('card-surface p-6', className)}>{children}</div>;
}

export default Card;
