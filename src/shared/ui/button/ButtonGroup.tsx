import React from 'react';
import { cn } from '../../lib/cn';

export interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'inline-flex rounded-md shadow-sm',
        '[&>button:first-child]:rounded-r-none',
        '[&>button:last-child]:rounded-l-none',
        '[&>button:not(:first-child):not(:last-child)]:rounded-none',
        '[&>button:not(:first-child)]:border-l-0',
        className
      )}
    >
      {children}
    </div>
  );
};
