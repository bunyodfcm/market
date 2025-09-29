import React from 'react';
import { cn } from '../../lib/cn';

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  variant?: 'default' | 'success' | 'warning';
  className?: string;
}

const variantStyles = {
  default: 'text-blue-600 focus:ring-blue-500',
  success: 'text-green-600 focus:ring-green-500',
  warning: 'text-orange-600 focus:ring-orange-500',
};

export const Radio: React.FC<RadioProps> = ({
  variant = 'default',
  className,
  ...props
}) => {
  return (
    <input
      type="radio"
      className={cn(
        // Base styles
        'w-4 h-4 border-gray-300 transition-colors duration-200',
        'focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        // Variant styles
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
};
